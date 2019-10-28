function formataCEP() {
    let temp = cep.value;
    if(temp.length === 2) {
        return cep.value = temp + ".";
    }
    if(temp.length === 6) {
        return cep.value = temp + "-";
    }
    if(temp.length >= 10) {
        validaCEP();
    }
}

function validaCEP() {
    let cepPattern = /^\d{2}.\d{3}-\d{3}$/;
    if(cepPattern.test(cep.value) === false) {
        cep.style.border="solid 1px red";
    } else {
        cep.style.border="solid 1px lightgreen";
    }
}