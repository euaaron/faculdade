#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

struct lista
{
    int id;
    Lista *prox;
};

struct pilha
{
    Lista *prim;
};

Pilha* criar()
{
    Pilha *p = (Pilha*)malloc(sizeof(Pilha));
    p->prim = NULL;
    return p;
}

void empilhar(Pilha* p, float v)
{
    Lista *l = (Lista*)malloc(sizeof(Lista));
    l->id = v;
    l->prox = p->prim;
    p->prim = l;
}

float remover(Pilha* p)
{
    Lista* l;
    float dado;
    if(vazia(p))
    {
        printf("A pilha está vazia!\n");
        exit(1);
    }
    l = p->prim;
    dado = l->id;
    p->prim = l->prox;
    free(l);
    return dado;
}

int vazia(Pilha *p)
{
    return (p->prim == NULL);
}

void liberar(Pilha* p)
{
    Lista* sacola = p->prim;
    while(sacola != NULL)
    {
        Lista *lixo = sacola->prox;
        free(sacola);
        sacola = lixo;
    }
    free(p);
}

float topo(Pilha *p)
{
    if(vazia(p))
    {
        printf("A pilha está vazia!\n");
        exit(1);
    }
    return p->prim->id;
}
