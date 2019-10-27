#include <stdio.h>
#include <stdlib.h>
#include "fila.h"

struct lista
{
    int id;
    Lista *prox;
};

struct fila
{
    Lista *inicio;
    Lista *fim;
};

Fila* criar()
{
    Fila *f = (Fila*)malloc(sizeof(Fila));
    f->inicio = f->fim = NULL;
    return f;
}

void inserir(Fila* f, float v)
{
    Lista *l = (Lista*)malloc(sizeof(Lista));
    l->id = v;
    l->prox = NULL; //O pr�ximo recebe um espa�o (NULL) que poder� utilizado futuramente para inserir novos elementos.

    if(f->fim != NULL) { //Caso o pr�ximo n� depois do fim n�o esteja vazio, ele receber� o elemento rec�m inserido.
        f->fim->prox = l;
    } else {
        f->inicio = l; //Caso contr�rio, significa que a lista ainda est� vazia, e portanto o elemento � inserido no in�cio.
    }
    f->fim = l; //O fim passa a ser o elemento rec�m inserido
}

float remover(Fila* f)
{
    Lista* l;
    float dado;

    if(vazia(f))
    {
        printf("A pilha est� vazia!\n");
        exit(1);
    }

    l = f->inicio;
    dado = l->id;
    f->inicio = l->prox;
    if(f->inicio==NULL) { //Verifica se ap�s a remo��o a fila ficou vazia.
        f->fim=NULL;      //Caso verdadeiro, o fim tamb�m deve ficar vazio.
    }
    free(l);
    return dado;
}

int vazia(Fila *f) { return (f->inicio == NULL); }

void liberar(Fila* f)
{
    Lista* sacola = f->inicio;
    while(sacola != NULL)
    {
        Lista *lixo = sacola->prox;
        free(sacola);
        sacola = lixo;
    }
    free(f);
}

void imprimir(Fila *f) {
    Lista *q = f->inicio;

    while (q!= NULL) {
        printf("%d\n", q->id);
        q = q->prox;
    }
}
