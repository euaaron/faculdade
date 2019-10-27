#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include "fila.h"

int main()
{
    setlocale(LC_ALL,"");
    Fila *f;
    f = criar();
    inserir(f, 10);
    inserir(f, 25);
    inserir(f, 30);

    imprimir(f);
    remover(f);

    imprimir(f);
    remover(f);

    imprimir(f);
    remover(f);

    imprimir(f);
    remover(f);

    return 0;
}
