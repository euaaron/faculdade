let digitos = document.getElementById("digitos");
digitos.addEventListener("blur", () => {
    if(digitos.value[digitos.value.length - 2] == "-") {
        return;
    }
    var digitosInseridos = digitos.value;
    var verificador = filtraDigitos(digitos.value);
    digitos.value = digitosInseridos + "-" + verificador;
    
});