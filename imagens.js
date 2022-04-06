//Imagens e sons
let estrada;
let ator;
let carro1;
let carro2;
let carro3;

let somTrilha;
let somAtravessou;
let somColidiu;


function preload(){
  estrada = loadImage("imagens/estrada.png")
  
  ator = loadImage("imagens/ator-1.png")
  
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/carro-2.png")
  carro3 = loadImage("imagens/carro-3.png")
  
  imagensCarros = [carro1,carro2,carro3,carro2,carro3,carro1]
  
  somTrilha = loadSound("sons/trilha.mp3")
  somAtravessou = loadSound("sons/pontos.wav")
  somColidiu = loadSound("sons/colidiu.mp3")
}