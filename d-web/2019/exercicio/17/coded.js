count = 1;
class Aluno {
    nome;
    id;
    constructor(nome) {
        this.id = count;
        this.nome = nome;
        count++;
    }
}

var alunos = new Array();

alunos.push("Alberto");
alunos.push("José");
alunos.push("Paulo");

alunos.forEach(element => {
    let linha = document.createElement("tr");
    let col = document.createElement("td");
    col.innerHTML = element;
    linha.appendChild(col);
    tabAlunos.appendChild(linha);
});
