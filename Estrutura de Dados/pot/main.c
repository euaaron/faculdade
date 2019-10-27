#include <stdio.h>
#include <stdlib.h>

int pot(int base, int expoente);

int main()
{
    int base, expoente;
    printf("Insira uma base: \n");
    scanf("%d", &base);
    printf("Insira um expoente: \n");
    scanf("%d", &expoente);

    printf("%d", pot(base, expoente));
    return 0;
}

int pot(int base, int expoente)
{
    if (expoente == 0)
    {
        return 1;
    }
    return base * pot(base, expoente - 1);
}
