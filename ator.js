//Ator
let xAtor = 70;
let yAtor = 366;
let meusPontos = 0;

//Oponente
let xAtorOpo = 300;
let yAtorOpo = 366;
let pontosOponente = 0;

let colisao = false


function MostrarAtores(){
    image(ator, xAtor, yAtor,30,30);
    image(ator, xAtorOpo, yAtorOpo,30,30);
}

function MovimentarAtores(){  
  if(keyIsDown(UP_ARROW)){
  yAtor -= 2;
  }  
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover(yAtor)){
  yAtor += 2;    
  }}
  if(keyIsDown(87)){
  yAtorOpo -= 2;
  }
  if(keyIsDown(83)){
    if(podeMover(yAtorOpo)){
  yAtorOpo += 2;
  }}
}


function VerificarColisao(){
  for(let i = 0; i < imagensCarros.length;i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros,xAtor,yAtor,15)
    if(colisao){
      colidiu();
      somColidiu.play();
    }
  }
}

function colidiu(){
  yAtor = 366;
  xAtor = 70;
}

function VerificarColisaoOponente(){
  for(let i = 0; i < imagensCarros.length;i++){
    colisaoOpo = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros,xAtorOpo,yAtorOpo,15)
    if(colisaoOpo){
      colidiuOponente();
      somColidiu.play();
    }
  }
}

function colidiuOponente(){
  yAtorOpo = 366;
  xAtorOpo = 300;
}

function incluirPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,0))
  text(meusPontos, width/5,27)
}
  
function incluirPontosOponente(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,0))
  text(pontosOponente, 300,27)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++
    yAtor = 366;
    somAtravessou.play();
  }
}
  
function marcaPontoOponente(){
  if(yAtorOpo < 15){
    pontosOponente++
    yAtorOpo = 366;
    somAtravessou.play();
  }
}

function podeMover(x){
  return x < 366
}
