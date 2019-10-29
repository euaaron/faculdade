estado = 0;

function troca(objeto) {
    botao = objeto.innerHTML;

    if (botao == "Não") {
        switch(estado) {
            case 2:
                btn2.style.top = "0px";
                btn1.innerHTML = "Sim";
                btn2.innerHTML = "Não";
                estado = 0;
            break;
            
            case 1:
                btn1.innerHTML = "Não";
                btn2.innerHTML = "Sim";
                estado++;
            break;
                    
            default:
                    btn2.style.top = "128px";
                    estado++;
            break;
        }
    }
}