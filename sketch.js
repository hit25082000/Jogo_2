function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  MostrarAtores();
  MostrarCarro();
  MovimentarCarro();
  MovimentarAtores();  
  VerificarColisao();
  VerificarColisaoOponente();
  incluirPontos();
  incluirPontosOponente();
  marcaPonto();  
  marcaPontoOponente();
}




