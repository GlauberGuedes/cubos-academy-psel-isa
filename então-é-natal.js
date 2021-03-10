function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
      let resposta = 0;
      let valor = 0;
      let valor2 = 0;
      for(let i = 0; i < produtos.length; i++) {
          const x = produtos[i];
          if(x.categoria === "SALGADO") {
              valor += ((x.valor * x.quantidade) - (x.valor * x.quantidade * 0.1))
          } else if(x.categoria === "DOCE") {
              valor += ((x.valor * x.quantidade) - (x.valor * x.quantidade * 0.15))
          } else {
              valor += ((x.valor * x.quantidade) - (x.valor * x.quantidade * 0.3))
          }
      }
      if(cupomDesconto === "NATAL10" && valor > 3000 && ehPrimeiraCompra) {
          valor2 = (valor - (valor * 0.1));
      } else if(cupomDesconto === "NATAL20" && valor > 4500 && ehPrimeiraCompra) {
          valor2 = (valor - (valor * 0.2));
      } else if(cupomDesconto === "NATAL30" && valor > 6000 && ehPrimeiraCompra) {
          valor2 = (valor - (valor * 0.3));
      } else if(cupomDesconto === "NATALSUPREMO" && valor > 8000 && ehPrimeiraCompra) {
          valor2 = (valor - (valor * 0.3));
      } else {
          valor2 = valor;
      }
      if(cupomDesconto === "NATALSUPREMO" && valor > 8000 && ehPrimeiraCompra) {
          resposta = valor2;
      } else {
          resposta = valor2 + (120 * distanciaRestaurante);
      }
      console.log(resposta);
  }