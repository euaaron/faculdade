#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

int main()
{
    setlocale(LC_ALL,"");
    Pilha *p;
    p = criar();
    empilhar(p, 10);
    empilhar(p, 20);
    empilhar(p, 30);
    printf("Topo: %.2f\n", topo(p));
    remover(p);
    printf("Topo: %.2f\n", topo(p));
    remover(p);
    printf("Topo: %.2f\n", topo(p));
    remover(p);
    printf("Topo: %.2f\n", topo(p));
    remover(p);
    printf("Topo: %.2f\n", topo(p));
    return 0;
}
