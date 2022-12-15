//variaveis do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 260, 315];
let velocidadeCarros = [2, 5, 3, 6, 2, 4];
let comprimentoCarros = 50;
let alturaCarros = 40;


//funções dos carros

  function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600}  
    }
  
  }

  function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      xCarros[i] -= velocidadeCarros[i];
    }
}

  function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i],  comprimentoCarros, 40)
    }
}


  function passouTodaATela (xCarros){
    return xCarros < - 50

}