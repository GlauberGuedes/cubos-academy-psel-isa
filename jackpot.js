function solucao(resultado1, resultado2, resultado3) {	
    let resultado = "";
    if(resultado1 === resultado2 && resultado1 === resultado3) {
        resultado = "true";
    } else {
        resultado = "false";
    }
    console.log(resultado);
}