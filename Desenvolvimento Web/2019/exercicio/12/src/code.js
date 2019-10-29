function formataCEP(filtrado) {
    var formatado = "";
    let temp = String(filtrado);
    if (cep.value.length <= 2)
    {
        formatado = temp.substr(0,2);
    }
    if (cep.value.length > 2 && temp.length <= 5)
    {
        formatado = temp.substr(0,2);
        formatado += ".";
        formatado += temp.substr(2,3);
    }
    if (cep.value.length > 5 )
    {
        formatado = temp.substr(0,2);
        formatado += ".";
        formatado += temp.substr(2,3);
        formatado += "-";
        formatado += temp.substr(5,3);
    }
    if(cep.value.length >= 10) {
        validaCEP();
    }
    if(cep.value.length < 10) {
        cep.style.border = "solid 1px gray";
        aviso.innerHTML = "";
    }
    cep.value = formatado;
}

function filtraCEP() {
    if (validaCEP() === 1) {
        return;
    }
    var filtrado = "";
    let filtrar = String(cep.value);

    for (i = 0; i <= cep.value.length; i++) {
        if (
            filtrar.substr(i,1) === "0" ||
            filtrar.substr(i,1) === "1" ||
            filtrar.substr(i,1) === "2" ||
            filtrar.substr(i,1) === "3" ||
            filtrar.substr(i,1) === "4" ||
            filtrar.substr(i,1) === "5" ||
            filtrar.substr(i,1) === "6" ||
            filtrar.substr(i,1) === "7" ||
            filtrar.substr(i,1) === "8" ||
            filtrar.substr(i,1) === "9"
        )
        {
            filtrado += filtrar.substr(i,1);
        }
    }
    formataCEP(filtrado);
}

function validaCEP() {
    let cepPattern = /^\d{2}.\d{3}-\d{3}$/;
    if(!cepPattern.test(cep.value)) {
        cep.style.border="solid 1px red";
        aviso.style.color = "red";
        aviso.innerHTML = "CEP INVÁLIDO!";
        return 0;
    } else {
        cep.style.border="solid 1px lightgreen";
        aviso.innerHTML = "";
        return 1;
    }
}