function mudaImagem(num) {
    var caminho = "src/images/";
    switch (num) {
        case 1:
            $('#mapa').attr('src', caminho + "brasil.jpg");
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

/**
 var caminho = "src/images/";

 $("#pais").click(function() {
    $('#mapa').attr('src', caminho + "brasil.jpg");
});

 $("#estado").click(function() {
    $('#mapa').attr('src', caminho + "minas.jpeg");
});

 $("#cidade").click(function() {
    $('#mapa').attr('src', caminho + "mata.png");
});

 $("#mapa").load();
 **/