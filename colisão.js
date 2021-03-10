function solucao(velocidade, aceleracao, distanciaObjeto) {
       let resposta = "";
      const derrapagem = ((-1 * velocidade * velocidade) / (2 * aceleracao));
      if ( derrapagem < distanciaObjeto) {
          resposta = "CAMINHO SEGURO";
      } else if ( derrapagem === distanciaObjeto) {
          resposta = "NAO ACELERE";
      } else {
          resposta = "COLISAO A FRENTE";
      }
      console.log(resposta);
  }