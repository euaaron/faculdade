/*
 * Project: Lista Encadeada Herói
 * File:    heroi.h
 * Author:  Aaron Stiebler
 *
 * Created on 2 de Outubro de 2019, 13:20
 * Last Update on 4 de Outubro de 2019, 08:35
 */

typedef struct heroi Heroi;

// Função de criação da lista
Heroi* criarLista();

// Função que insere no início da lista
Heroi* inserir(Heroi* lista);

//Funcão que cria um Herói
Heroi* criarPerfil(Heroi* lista, int classe,  char* nome);

void exibir(Heroi* lista); //Função de exibição
void exibirSelecionado();

void buscar(Heroi* lista); //Funções para buscar
Heroi* buscarId(Heroi* lista); // um herói

void menuRanking(Heroi *lista);

void listarHerois(Heroi* lista);

int estaVazia(Heroi* lista);// Verifica se a lista está vazia

Heroi* remover(Heroi* atual); //Remover Herói por ID

//Funções que definem os valores iniciais de cada atributo de um herói
char* definirClasse(int opcao);
int definirVida(int opcao);
int definirAtaque(int opcao);
int definirDefesa(int opcao);
