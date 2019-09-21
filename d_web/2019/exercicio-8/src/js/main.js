/**
function mudaImagem(num) {
    var caminho = "src/images/";
    switch (num) {
        case 1:
            $('#mapa').attr('src', caminho + "brasil.jpeg");
            break;
        case 2:
            $('#mapa').attr('src', caminho + "minas.jpeg");
            break;
        case 3:
            $('#mapa').attr('src', caminho + "mata.png");
            break;
    }
}
$("#mapa").load();
**/

var caminho = "src/images/";

document.getElementById("pais").addEventListener("click", function(){
    $('#mapa').attr('src', caminho + "brasil.jpg");
    $("#mapa").load();
});

document.getElementById("estado").addEventListener("click", function(){
    $('#mapa').attr('src', caminho + "minas.jpeg");
    $("#mapa").load();
});

document.getElementById("cidade").addEventListener("click", function(){
    $('#mapa').attr('src', caminho + "mata.png");
    $("#mapa").load();
});