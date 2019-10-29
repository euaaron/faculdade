/*
 * Project: Lista Encadeada Her�i
 * File:    heroi.h
 * Author:  Aaron Stiebler
 *
 * Created on 2 de Outubro de 2019, 13:20
 * Last Update on 4 de Outubro de 2019, 08:35
 */

typedef struct heroi Heroi;

// Fun��o de cria��o da lista
Heroi* criarLista();

// Fun��o que insere no in�cio da lista
Heroi* inserir(Heroi* lista);

//Func�o que cria um Her�i
Heroi* criarPerfil(Heroi* lista, int classe,  char* nome);

void exibir(Heroi* lista); //Fun��o de exibi��o
void exibirSelecionado();

void buscar(Heroi* lista); //Fun��es para buscar
Heroi* buscarId(Heroi* lista); // um her�i

void menuRanking(Heroi *lista);

void listarHerois(Heroi* lista);

int estaVazia(Heroi* lista);// Verifica se a lista est� vazia

Heroi* remover(Heroi* atual); //Remover Her�i por ID

//Fun��es que definem os valores iniciais de cada atributo de um her�i
char* definirClasse(int opcao);
int definirVida(int opcao);
int definirAtaque(int opcao);
int definirDefesa(int opcao);
