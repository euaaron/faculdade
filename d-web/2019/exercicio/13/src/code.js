function formataCPF(filtrado) {
    var formatado = "";
    let temp = filtrado;
    if (cpf.value.length <= 3)
    {
        formatado = temp;
    }
    if (cpf.value.length > 3 && temp.length <= 6)
    {
        formatado = temp.substr(0,3);
        formatado += ".";
        formatado += temp.substr(3,3);
    }
    if (cpf.value.length > 6 )
    {
        formatado = temp.substr(0,3);
        formatado += ".";
        formatado += temp.substr(3,3);
        formatado += ".";
        formatado += temp.substr(6,3);
    }
    if (cpf.value.length > 9 )
    {
        formatado = temp.substr(0,3);
        formatado += ".";
        formatado += temp.substr(3,3);
        formatado += ".";
        formatado += temp.substr(6,3);
        formatado += "-";
        formatado += temp.substr(9,2);
    }
    if(cpf.value.length >= 14) {
        validaCPF();
    }
    if(cpf.value.length < 14) {
        cpf.style.border = "solid 1px gray";
        aviso.innerHTML = "";
    }
    cpf.value = formatado;
}

function filtraCPF() {
    if (validaCPF() === 1) {
        return;
    }
    var filtrado = "";
    let filtrar = String(cpf.value);

    for (i = 0; i <= cpf.value.length; i++) {
        if (
            filtrar.substr(i,1).charCodeAt(0) >= 48 &&
            filtrar.substr(i,1).charCodeAt(0) <= 57
        )
        {
            filtrado += filtrar.substr(i,1);
        }
    }
    formataCPF(filtrado);
}

function validaCPF() {
    let cepPattern = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    if(!cepPattern.test(cpf.value)) {
        cpf.style.border="solid 1px red";
        aviso.style.color = "red";
        aviso.innerHTML = "Número máximo de caracteres alcançado!";
        return 0;
    } else {
        cpf.style.border="solid 1px lightgreen";
        aviso.innerHTML = "";
        return 1;
    }
}