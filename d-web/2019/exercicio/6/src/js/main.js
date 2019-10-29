function mudaVideo(num) {
    var caminho = "files/videos/";
    switch (num) {
        case 1:
            $('#video').attr('src', caminho + "saofb.mp4");
            break;
        case 2:
            $('#video').attr('src', caminho + "forzah4.mkv");
            break;
        case 3:
            $('#video').attr('src', caminho + "johnw1.mkv");
            break;
    }
}
$("#video").load();