function solucao(palpite, palavra) {
    let resposta = 0;
    for(let i = 0; i < palavra.length; i++) {
        const x = palavra[i];
        if(x === palpite) {
            resposta += 1;
        } else {
            resposta += 0;
        }
    }
    console.log(resposta);
}