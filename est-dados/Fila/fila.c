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
    l->prox = NULL; //O próximo recebe um espaço (NULL) que poderá utilizado futuramente para inserir novos elementos.

    if(f->fim != NULL) { //Caso o próximo nó depois do fim não esteja vazio, ele receberá o elemento recém inserido.
        f->fim->prox = l;
    } else {
        f->inicio = l; //Caso contrário, significa que a lista ainda está vazia, e portanto o elemento é inserido no início.
    }
    f->fim = l; //O fim passa a ser o elemento recém inserido
}

float remover(Fila* f)
{
    Lista* l;
    float dado;

    if(vazia(f))
    {
        printf("A pilha está vazia!\n");
        exit(1);
    }

    l = f->inicio;
    dado = l->id;
    f->inicio = l->prox;
    if(f->inicio==NULL) { //Verifica se após a remoção a fila ficou vazia.
        f->fim=NULL;      //Caso verdadeiro, o fim também deve ficar vazio.
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
