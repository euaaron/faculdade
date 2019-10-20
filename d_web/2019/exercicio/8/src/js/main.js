/**
 * Author: Aaron Silva
 * Email: euaaron@outlook.com
 *
 * Date: 20/09/2019
 * */

var caminho = "src/images/";

document.getElementById("pais").addEventListener("click", trocaImagem("brasil.jpg"));

document.getElementById("estado").addEventListener("click", trocaImagem("minas.jpeg"));

document.getElementById("cidade").addEventListener("click", trocaImagem("mata.png"));

function trocaImagem (image) {
    $('#mapa').attr('src', caminho + image);
    $('#mapa').load();
}

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

