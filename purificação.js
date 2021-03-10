function solucao(stringCorrompida) {
    let n = "";
    for(let i = 0; i < stringCorrompida.length; i++) {
        const x = stringCorrompida[i];
        if((x === "!") || (x === "@") || (x === "#") || (x === "$") || (x === "%") || (x === "&") || (x === "*") || (x === "(") || (x === ")")) {
            n += "";
    } else {
        n += x;
    }
    }
    console.log(n);
}