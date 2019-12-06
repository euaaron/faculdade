count = 1;
class Aluno {
    nome;
    id;
    constructor(nome) {
      this. id = count;
      this.nome = nome;
      count++;
    }
  }

//Elementos da página
var tabelaAlunos = document.createElement("table");
var tabHead = document.createElement("thead");
var tabHeadR = document.createElement("tr");
var tabBody = document.createElement("tbody");
var titulo = document.createElement("td");
var idTitulo = document.createElement("td");

var tabelaSorteados = document.createElement("table");
var tabHeadST = document.createElement("thead");
var tabHeadRST = document.createElement("tr");
var tabBodyST = document.createElement("tbody");
var tituloST = document.createElement("td");
var idTituloST = document.createElement("td");

var form = document.createElement("div");
var labelNome = document.createElement("label");
var nomeInput = document.createElement("input");
var insere = document.createElement("button");
var sorteia = document.createElement("button");
var remove = document.createElement("button");

var display = document.createElement("div");

var msg = document.createElement("p");

//Atribui um id a eles
insere.id = "insere";
remove.id = "remove";
sorteia.id = "sorteia";
form.id = "form";
display.id = "display";
msg.id = "msg";

//Adiciona valores e outros atributos
labelNome.innerHTML = "Nome: ";
insere.innerHTML = "Insere";
sorteia.innerHTML = "Sorteia";
remove.innerHTML = "Remove";
nomeInput.type = "text";

idTitulo.innerHTML = "ID";
titulo.innerHTML = "NOME";
titulo.style.fontWeight = "bold";
idTitulo.style.fontWeight = "bold";

idTituloST.innerHTML = "ID";
tituloST.innerHTML = "NOME";
tituloST.style.fontWeight = "bold";
idTituloST.style.fontWeight = "bold";

tabHead.appendChild(tabHeadR);
tabHeadR.appendChild(idTitulo);
tabHeadR.appendChild(titulo);
tabelaAlunos.appendChild(tabHead);
tabelaAlunos.appendChild(tabBody);

tabHeadST.appendChild(tabHeadRST);
tabHeadRST.appendChild(idTituloST);
tabHeadRST.appendChild(tituloST);
tabelaSorteados.appendChild(tabHeadST);
tabelaSorteados.appendChild(tabBodyST);

var lista = new Array();

var listaSort = new Array();

insere.addEventListener("click", () => {
    let novo = new Aluno(nomeInput.value);
    lista.push(novo);    
    tabBody.innerHTML = "";
    lista.forEach(Aluno => {
        let nlinha = document.createElement("tr");
        let id = document.createElement("td");
        let nome = document.createElement("td")
        id.innerHTML = Aluno.id;
        nome.innerHTML = Aluno.nome;
        nlinha.id = "aluno-" + Aluno.id;
        nlinha.appendChild(id);
        nlinha.appendChild(nome);
        tabBody.appendChild(nlinha);
    });
});

sorteia.addEventListener("click", function sorteiaElemento() {
    let sorteio;
    let selecionado;
    do {
        sorteio = Math.floor(Math.random() * ((lista.length + 1) - 1)) + 1;
        while(temElemento(sorteio)) {
            sorteio = Math.floor(Math.random() * ((lista.length + 1) - 1)) + 1;
            selecionado = document.getElementById("aluno-" + sorteio);
            selecionado = document.getElementById("aluno-" + sorteio).style.backgroundColor;
        }
    } while(selecionado == null || undefined);
    
    document.getElementById("aluno-" + sorteio).style.backgroundColor = "#22AEDF";
    sorteado = lista.find(x => x.id == sorteio);
    addSorteado(sorteado);
});

function temElemento(num) { return listaSort.includes(x => x.id == num) }

function addSorteado(sorteado) {
    if(listaSort.includes(x => x.id == sorteado.id)) {
        return sorteiaElemento();
    }
    listaSort.push(sorteado);
    msg.innerHTML = sorteado.nome + " foi sorteado!";
    tabBodyST.innerHTML = "";
    console.log("//Lista/");
    listaSort.forEach(Aluno => {
        console.log("ID: " + Aluno.id + " - Nome: " + Aluno.nome);
        let nlinha = document.createElement("tr");
        let nomeST = document.createElement("td");
        let idST = document.createElement("td");
        nomeST.innerHTML = Aluno.nome;
        nlinha.id = "aluno-" + Aluno.id;
        idST.innerHTML = Aluno.id;
        nlinha.appendChild(idST);
        nlinha.appendChild(nomeST);
        tabBodyST.appendChild(nlinha);
    });
}

document.body.appendChild(form);
document.body.appendChild(display);
display.appendChild(msg);
form.appendChild(labelNome);
form.appendChild(nomeInput);
form.appendChild(insere);
form.appendChild(sorteia);
display.appendChild(tabelaAlunos);
display.appendChild(tabelaSorteados);
