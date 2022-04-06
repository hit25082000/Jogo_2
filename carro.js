let yCarros= [40,96,150,210,270,318]
let xCarros= [600,600,600,600,600,600]
let VelocidadeCarros = [2,3,2.5,5,1,1.5]
let alturaCarros = 40;
let comprimentoCarros = 50;

function MostrarCarro(){
  for (let i = 0; i < imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i],yCarros[i],comprimentoCarros,alturaCarros);  
  }
}

function MovimentarCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
  xCarros[i] -= VelocidadeCarros[i];  
  }
  LoopCarro();
}

function LoopCarro(){
  for(let i =0; i < imagensCarros.length; i++)
  if(PassouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }  
}

function PassouTodaTela(xCarros){
  return xCarros < -50
}