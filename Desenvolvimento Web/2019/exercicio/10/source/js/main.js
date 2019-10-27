var nome;
function oi() {
    nome = window.prompt("Qual o seu nome?");
    var rodape = document.getElementsByTagName("footer")[0];
    rodape.innerHTML = "Usuário: " + nome;
}