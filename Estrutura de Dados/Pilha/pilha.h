typedef struct pilha Pilha;
typedef struct lista Lista;

Pilha* criar();
void empilhar(Pilha* p, float v);
float remover(Pilha* p);
int vazia(Pilha* p);
void liberar(Pilha* p);
float topo(Pilha *p);
