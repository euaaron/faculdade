/*
 * Project: Lista Encadeada Herói
 * File:    listaHeroi.c
 * Author:  Aaron Stiebler
 *
 * Created on 2 de Outubro de 2019, 13:19
 * Last Update on 4 de Outubro de 2019, 08:35
 */

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <conio.h>
#include "heroi.h"

void menu(Heroi* lista);

int main() {
    setlocale(LC_ALL,"");

    Heroi* lista;
    lista = criarLista();
    menu(lista);

    return (EXIT_SUCCESS);
}

void menu(Heroi* lista) {
    system("@cls||clear");
    int opcao;
    exibir(lista);
    printf(
            "\nPAINEL DE CONTROLE\n"
            "Escolha uma opcao:\n"
            "[1] Criar um personagem\n"
            "[2] Listar todos os personagens\n"
            "[3] Buscar personagem\n"
            "[4] Remover personagem\n"
            "[5] Ver ranking de personagens\n"
            "[0] Sair\n"
            "Opcao: "
    );
    scanf("%d", &opcao);
    if (opcao == 1) {
        lista = inserir(lista);
    }
    if (opcao == 2) {
        listarHerois(lista);
    }
    if (opcao == 3) {
        buscar(lista);
    }
    if (opcao == 4) {
        remover(lista);
    }
    if (opcao == 5) {
        menuRanking(lista);
    }
    if (opcao == 9) {
        system("@cls||clear");
    }
    if (opcao == 0) {
        printf("Adeus.");
        free(lista);
        exit(0);
    }
    menu(lista);
}

void pause() {
    puts("\nPressione qualquer coisa para voltar ao menu... ");
    char pausar[1];
    scanf("%s", (char*) &pausar[1]);
}
