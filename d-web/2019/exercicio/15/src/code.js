/*
Exercício para 08/11/2019

1) Crie uma função que receba uma data e retorne verdadeiro ou falso caso a data seja
válida ou não, respectivamente.

- O valor recebido pode vir “quase” de qualquer forma. 1/1/2019, 1/01/2019, 01-1-2019
são válidos, mas caracteres diferentes de / ou – ou misturar os dois na mesma data não.

- a ordem será sempre dia, mês e ano.- a data será considerada válida se o dia estiver
 entre 1 e 31, o mês entre 1 e 12 e o ano entre 1 e 3000 (não precisa verificar mês
 com nr de dias diferente)

 #SUGESTÕES
 - Use o método search para verificar se o separador é / ou -
 - Use o método split para separar mes/dia/ano
*/

function formData() {
    let teste = document.getElementById('data').value;
    var temBarra = teste.search("/");
    var temTraco = teste.search("-");
    let separador = "/-";

    let valor = teste.split(separador);

    let cont = 0;
    let dia = parseInt(valor[0]);
    let mes = parseInt(valor[1]);
    let ano = parseInt(valor[2]);

    if(senha == mai || senha == min) {
        let char = "@#$%*";
        let num = 0;

        for(i=0; i<char.length; i++) {
            let tempChar = char.charAt(i);
            senha.search(tempChar);
            if(senha.search(tempChar) > -1) num++;
        }

        if(num===0) return false;

        return true;
    }

    if((!temTraco && !temBarra) || (temTraco && temBarra)) {
        return false;
    }

    if(dia <= 31 && dia >= 1) cont++;
    if(mes <= 12 && mes >= 1) cont++;
    if(ano <= 3000 && ano >= 1) cont++;

    return cont === 3;
}

function retornar() {
    if(formData()) {
        retorno.innerHTML = "Formato correto!";
    } else {
        retorno.innerHTML = "Formato inválido!";
    }
}

function validaSenha(senha) {
    if(senha.length < 6) return false;
    let min = senha.toLowerCase();
    let mai = senha.toUpperCase();

    if(senha == mai || senha == min) {
        let char = "@#$%*";
        let num = 0;

        for(i=0; i<char.length; i++) {
            let tempChar = char.charAt(i);
            senha.search(tempChar);
            if(senha.search(tempChar) > -1) num++;
        }

        if(num===0) return false;

        return true;
    }
}