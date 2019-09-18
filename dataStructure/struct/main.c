#include <stdio.h>

int main(void) 
{
	typedef struct { 
    	int id;
    	int hp;
    	float cp;    
    	char nome;
    	int totalEvo;
    	int atualEvo;    
	} Pokemon;
	
	Pokemon *pikachu = NULL;
	
	if(pikachu!=NULL) {
		printf("Não funciona!");
	}
	
	
	return 0;
}
