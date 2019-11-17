var count = 0;
var tempo = 0;
var record = 0;
var dataInicio;
var dataFim;

// Cria novos elementos
var jogo = document.createElement("div");
var sol = document.createElement("div");

var solo = document.createElement("div");
var cacto1 = document.createElement("div");
var cacto2 = document.createElement("div");

var const1 = document.createElement("div");
var const2 = document.createElement("div");
var const3 = document.createElement("div");

var player = document.createElement("div");

var painel = document.createElement("div");  
var recordHUD = document.createElement("div");

var menu = document.createElement("div");
var boasVindas = document.createElement("h1");
var inicio = document.createElement("button");
var container = document.createElement("div");

// Atribuí um id a eles
jogo.id = "jogo";
sol.id = "sol";

solo.id = "solo";
cacto1.id = "cacto1";
cacto2.id = "cacto2";

const1.id = "const1";
const2.id = "const2";
const3.id = "saloon";

player.id = "cowboy";

painel.id = "painel";
recordHUD.id = "record";

container.id = "container";
menu.id = "menu";
inicio.id = "inicio";

window.addEventListener("load", () => {
    document.body.appendChild(container);
    document.body.appendChild(jogo); 
    jogo.appendChild(solo);
    gameMenu();
});

inicio.addEventListener("click", () => {
    reseta(); 
    container.style.display = "none";
    jogo.appendChild(sol);
    solo.appendChild(cacto1);
    solo.appendChild(cacto2);
    solo.appendChild(player);

    // moveObj(elemento, larg. max., alt. max.) 
    // Os valores de alt e larg são fatores de divisão.
    // Exemplo:
    // Para mover até no máximo metade da tela (50%), usa-se o valor 2. 
    // Pois aí é feira a divisão do tamanho da tela por 2 (50%)
    // Seguindo essa lógica, para 100% usa-se o valor 1, para 80 usa-se 1.2, etc
    moveObj(sol, 1.2, 2);
    var numConst = getRandom(0,3);

    switch(numConst) {
        case 1:
            solo.appendChild(const3);
            moveHorizontal(const3, jogo, 1.5);
            break;
        case 2:
            solo.appendChild(const3);
            solo.appendChild(const1);
            moveHorizontal(const3, jogo, 1.5);
            moveHorizontal(const1, jogo, 1.5);
            break;
        case 3:
            solo.appendChild(const2);
            solo.appendChild(const1);
            moveHorizontal(const2, jogo,  1.5);
            moveHorizontal(const1, jogo, 1.5);
            break;
        default:
            break;
    }
    moveObjFilho(player, solo, 1.2, 1.2);
    moveObjFilho(cacto1, solo, 1.2, 2);
    moveObjFilho(cacto2, solo, 1.2, 2);

    // Elementos HUD
    jogo.appendChild(painel);
});

player.addEventListener("mouseup", () => {
    if(fim()) {
        return;
    } else {
        moveObjFilho(player, solo, 1.2, 1.2);
        atualizaPainel();
    }
});


function gameMenu() {
    
    // Adiciona os novos elementos ao DOM
    // Elementos de Cenário
    container.appendChild(menu);
    menu.appendChild(boasVindas);
    menu.appendChild(recordHUD);
    menu.appendChild(inicio);
    
    inicio.innerHTML = "Acerte o cowboy!".toUpperCase();    
    boasVindas.innerHTML = "Tens o que é preciso para ser mouse mais rápido do oeste?".toUpperCase();
}

function atualizaPainel() {
    if(count === 10) {
        if (dataFim == null) {
            dataFim = new Date();
            //player.style.backgroundImage = "url('../assets/tumulo.png')";
        }
        resultado();
        return;
    }
    count++;
    painel.innerHTML = count + "/10";
    if(count === 1) {
        dataInicio = new Date();
    }
};

function fim() { return count === 11; }

function resultado() {
    tempo = dataFim - dataInicio;
    tempo = Math.round(tempo/1000);
    alert("Você terminou o jogo em " + tempo + " segundos.");
    if (tempo < record || record === 0) {
        record = tempo;
        recordHUD.innerHTML = "Recorde: " + record + " segundos.";
    }
    container.style.display = "flex";
}

function reseta() {
    count = 0;
    dataInicio = null;
    dataFim = null;
    //player.style.backgroundImage = "url('../assets/cowboy.png')";
}

// Utilidades: Funções uteis a mais de uma situação

function getRandom(min, max) //Retorna um numero randomico entre um número MINimo e um número MAXimo
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function browserWidth() //Retorna a largura do navegador, sem contar a barra de rolagem
{
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function browserHeight() //Retorna a altura do navegador, sem contar a barra de rolagem
{
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function moveObj(obj, maxWidth, maxHeight) {
    obj.style.left = getRandom(0, browserWidth())/maxWidth + "px";
    obj.style.top = getRandom(0, browserHeight())/maxHeight + "px";
}

function moveHorizontal(obj, objPai, maxWidth) {
    obj.style.left = getRandom(0, objPai.offsetWidth)/maxWidth + "px";
}

function moveObjFilho(obj, objPai, maxWidth, maxHeight) {
    obj.style.left = getRandom(0, objPai.offsetWidth)/maxWidth + "px";
    obj.style.bottom = getRandom(0, objPai.offsetHeight)/maxHeight + "px";
}