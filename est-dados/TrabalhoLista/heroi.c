/*
 * Project: Lista Encadeada Herói
 * File:    heroi.c
 * Author:  Aaron Stiebler
 *
 * Created on 2 de Outubro de 2019, 13:20
 * Last Update on 4 de Outubro de 2019, 08:35
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "heroi.h"
#define MAX 16

int count = 0;

struct heroi
{
    int cod;
    char* nome;
    char* classe;
    float vida;
    float ataque;
    float defesa;
    float nivel;
    struct heroi* prox;
};

Heroi *heroiSelecionado = NULL;

Heroi* criarLista() { return NULL; }

Heroi* criarPerfil(Heroi* lista, int classe, char* nome) {
    Heroi* atual = (Heroi*)malloc(sizeof(Heroi));
    atual->cod = count+1;
    count++;

    atual->nome = nome;
    atual->classe = definirClasse(classe);
    atual->vida = definirVida(classe);
    atual->ataque = definirAtaque(classe);
    atual->defesa = definirDefesa(classe);
    atual->nivel = 1;
    atual->prox = lista;
    return atual;
}

Heroi* inserir(Heroi* lista) {
    system("@cls||clear");
    char* nome = (char*)malloc(sizeof(char) * MAX);
    int classe;

    printf(
            "Escolha uma classe:\n"
            "[1]Guerreiro\n"
            "[2]Arqueiro\n"
            "[3]Ladino\n"
            "[4]Paladino\n"
            "[*]Aventureiro\n"
            "Opcao: "
    );
    scanf("%d", &classe);

    printf("\nInsira o nome: ");
    scanf("%s", nome);

    lista = criarPerfil(lista, classe, nome);
    system("@cls||clear");
    return lista;
}

void exibir(Heroi* lista) {
    Heroi* temp = lista;
    if (temp != NULL) {
        printf("Herois criados: ");
        for (; temp != NULL; temp = temp->prox) {
            printf(" %s(%d) ", temp->nome, temp->cod);
        }
        printf("\n" );
    }
}

void menuRanking(Heroi *lista) {
    system("@cls||clear");
    int opcao;
    printf(
            "RANKING:\n"
            "[1]Defesa\n"
            "[2]Ataque (indisponível no momento)\n"
            "[3]Vida (indisponível no momento)\n"
            "[4]Geral (indisponível no momento)\n"
            "[0]Voltar\n"
            "Opcao: "
    );
    scanf("%d", &opcao);
    if (opcao == 0) {
        return;
    }
    if(opcao == 1) {
        Heroi *temp = lista;
        Heroi *maior = lista;
        for (; temp != NULL; temp = temp->prox) {
            if(temp->defesa > maior->defesa) {
                maior = temp;
            }
        }
        printf("O Herói %s possuí a maior defesa entre todos os Heróis: %.0f.", maior->nome, maior->defesa);
        pause();
    }
    menuRanking(lista);
}

void buscar(Heroi* lista) {
    system("@cls||clear");
    int opcao;
    exibirSelecionado();
    printf(
            "\nMENU DE BUSCA\n"
            "[1] Buque e selecione um herói por ID\n"
            "[2] Veja informações do herói\n"
            "[0] Volte ao menu principal\n"
            "Opcao: "
    );
    scanf("%d", &opcao);
    if (opcao == 1) {
            if(lista == NULL) {
                printf("Nenhum herói foi adicionado à lista!");
                pause();
                return;
            }
        Heroi *temp = buscarId(lista);
        printf("O personagem com esse ID é o %s!\n", temp->nome);
        printf("Insira 1 para selecionar o herói ou 0 para sair.");
        scanf("%d", &opcao);
        if (opcao == 1) {
            heroiSelecionado = temp;
            if (heroiSelecionado == NULL) {
                printf("Nenhum herói foi selecionado.\n");
                return buscar(lista);
            } else {
                printf("O Herói foi selecionado.\n");
                pause();
                return buscar(lista);
            }
        } else {
            printf("Nenhum herói foi selecionado.\n");
            pause();
            return buscar(lista);
        }
    }
    if (opcao == 2) {
        if(heroiSelecionado == NULL) {
             printf("\nVocê precisa selecionar um herói para usar essa opção!");
             pause();
             return buscar(lista);
         }
        printf(
            "\nINFO DO HERÓI\n"
            "ID: %d\n"
            "Nome: %s\n"
            "Classe: %s\n"
            "Ataque: %.2f\n"
            "Defesa: %.2f\n"
            "Vida: %.2f\n",
            heroiSelecionado->cod, heroiSelecionado->nome, heroiSelecionado->classe, heroiSelecionado->ataque,
            heroiSelecionado->defesa, heroiSelecionado->vida
          );
          pause();
    }
    if (opcao == 0) {
        return;
    }
    return buscar(lista);
}

void exibirSelecionado() {
    if(heroiSelecionado != NULL) {
        printf("Herói selecionado: %d(%s) ", heroiSelecionado->cod, heroiSelecionado->nome);
    }
}

void listarHerois(Heroi* lista) {
    Heroi* temp = lista;
    if (temp != NULL) {
        printf("\nHerois: ");
        for (; temp != NULL; temp = temp->prox) {
            printf("\n(%d)%s: %.0f pontos de vida  - %.0f pontos de ataque  - %.0f pontos de defesa", temp->cod, temp->nome, temp->vida, temp->ataque, temp->defesa);
        }
        printf("\n" );
        pause();
        return;
    }
    printf("\nNão há herois na lista!");
    pause();
}

Heroi* buscarId(Heroi* lista) {
    system("@cls||clear");
    int id = 0;
    printf("Insira o Id do personagem: ");
    scanf("%d", &id);
    Heroi* temp;
    for (temp = lista; temp != NULL; temp = temp->prox) {
        if (temp->cod == id) {
            return temp;
        }
    }
    return NULL;
}

Heroi* remover(Heroi* atual) {
    int id;
    system("@cls||clear");
    printf("Insira o Id do personagem: ");
    scanf("%d", &id);

    Heroi* anterior = NULL;
    Heroi* inicio = atual;

    while ((atual != NULL) && (atual->cod != id)) {
        anterior = atual;
        atual = atual->prox;
    }

    if (atual == NULL) { return inicio; }

    if (anterior == NULL) {
        inicio = atual->prox;
    }
    else {
        anterior->prox = atual->prox;
    }
    free(atual);
    return inicio;
}

//Métodos de definição de pontos iniciais com base na classe do personagem
char* definirClasse(int opcao) {
    switch (opcao) {
        case 1:
            return "Guerreiro";
        case 2:
            return "Arqueiro";
        case 3:
            return "Ladino";
        case 4:
            return "Paladino";
        default:
            return "Aventureiro";
    }
}

int definirVida(int opcao) {
    switch (opcao) {
        case 1:
            return 80;
        case 2:
            return 60;
        case 3:
            return 50;
        case 4:
            return 100;
        default:
            return 60;
    }
}

int definirAtaque(int opcao) {
    switch (opcao) {
        case 1:
            return 30;
        case 2:
            return 20;
        case 3:
            return 40;
        case 4:
            return 10;
        default:
            return 25;
    }
}

int definirDefesa(int opcao) {
    switch (opcao) {
        case 1:
            return 30;
        case 2:
            return 20;
        case 3:
            return 20;
        case 4:
            return 60;
        default:
            return 20;
    }
}
