function filtraDigitos(entrada) {
    var resultado = 0;

    for (i = 0; i <= entrada.length; i++) {
        if (
            entrada.substr(i,1).charCodeAt(0) >= 48 &&
            entrada.substr(i,1).charCodeAt(0) <= 57
        )
        {
            resultado += parseInt(entrada[i]);
        }
    }
    resultado = resultado % 10;
    return resultado;
}