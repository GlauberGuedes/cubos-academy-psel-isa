function solucao(jogadas) {
    let resposta = 0;
    let resultado = "";
    for( let i = 0; i < jogadas.length; i++) {
        const x = jogadas[i];
        if(x >= 0) {
            resposta += x;
        } else {
            resposta += x;
        }
       if(resposta === (jogadas.length / 2)) {
           resultado = "true";
       } else {
           resultado = "false";
       }
    }
  console.log(resultado);
}