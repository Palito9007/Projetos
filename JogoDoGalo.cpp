#include <string>
#include <iostream>
using namespace std;


		//VARIAVEIS AUXILIARES:
		
		int pV [10] = {0,1,2,3,4,5,6,7,8,9}; // Ver a funcao grelha vazia. p(osicoes) V(azias) 
		
		char pOcupado [10]= {' ',' ',' ',' ',' ',' ',' ',' ',' ',' '};// Vai trocar os valores do array em cima sempre que se usar uma daquelas posicoes.
		
		int nTurno = 1; // Um extrazinho que mostra o numero do turno e quem o joga.
		
		int nJogador = 1; //  Autoexplicatorio.
		
		int nVitoriasX = 0;
							// Quantas vezes o jogador 1 ou 2 ganhou.
		int nVitoriasO = 0;

//ESPACO PARA COLOCAR FUNCOES:

//PROTOTIPAGEM DA FUNCAO 4, VITORIA (Ve se o jogador ganhou ou nao)
int vitoria();


//Funcao 1, grelha vazia. (Prepara a grelha com as posicoes posiveis.)
void grelhaVazia(){
        cout << "        P1 " << "|" << " P2 " << "|" << " P3 \n";
        cout << "       ____|____|____\n";
        cout << "        P4 " << "|" << " P5 " << "|" << " P6 \n";
        cout << "       ____|____|____\n";
        cout << "        P7 " << "|" << " P8 " << "|" << " P9 \n";
        cout << "           |    |   \n \n \n \n";
}

//Funcao 2 Mostra a grelha,

int grelhaOcupada(){
        cout << "         "<<pOcupado[1]<<" " << "|" << " "<<pOcupado[2]<<" " << "|" << " "<<pOcupado[3]<<" \n";
        cout << "       ____|___|____\n";
        cout << "         "<<pOcupado[4]<<" " << "|" << " "<<pOcupado[5]<<" " << "|" << " "<<pOcupado[6]<<" \n";
        cout << "       ____|___|____\n";
        cout << "         "<<pOcupado[7]<<" " << "|" << " "<<pOcupado[8]<<" " << "|" << " "<<pOcupado[9]<<" \n";		
        cout << "           |   |   \n";
}
//Funcao 3, faz a jogada
char turno(){
	
	cout << "Escolha uma posicao \n";
	 for (int i = 1; i != 10; i++) { if (pV[i] != 32 ){ cout << " "<< pV[i];}};
	 cout << "\n";
	 int escolha;
	 cin >> escolha;
	 if (pOcupado [escolha] == ' ' ){
	 pV[escolha] = ' ';
	    if(nJogador == 1)
		{pOcupado[escolha] = 'X';}
		else
		{pOcupado[escolha] = 'O';}
		
	}else{ cout << "Escolha indesponivel. Tente outravez. \n"; return (nTurno);
	}
	system("cls");
	cout << '\n';
	return (nTurno++);
}

//PROTOTIPAGEM DA FUNCAO 5 RESTART
void restart(char pOcupado[10], int pV[10]);


//MAIN BEGIN
main(){
	if (nVitoriasX || nVitoriasO != 0){
		cout << "\n \n \nO jogador 1 ( X )ganhou..." << nVitoriasX << "  vezes ! \n";
		cout << "Enquanto que o jogador 2 ( O ) ganhou "<< nVitoriasO << "  vezes ! \n \n";
	}
		
    cout << "A Carregar o Jogo do Galo, realizado por Pedro Perestrelo.\n \n \n";
    
    grelhaVazia();
    
    grelhaOcupada();
    
    for (nTurno = 0;nTurno != 9;){
    	
    	
    	
		turno();
		
    	grelhaOcupada();
    	
    	nTurno % 2 == 0 ? nJogador = 1 : nJogador = 2;
    	
    	cout << "\nTurno numero :  " <<nTurno << "  \n" << "E a vez do jogador:  " << nJogador  << "\n \n \n";
    	
    	cout << pOcupado[2];
    	
		vitoria();
		
	}
}

//MAIN END

int vitoria(){
	 if ((pOcupado[1] == 'X' && pOcupado[2] == 'X' && pOcupado[3] == 'X') ||
	 	 (pOcupado[4] == 'X' && pOcupado[5] == 'X' && pOcupado[6] == 'X') ||
	 	 (pOcupado[7] == 'X' && pOcupado[8] == 'X' && pOcupado[9] == 'X') ||
	 	 (pOcupado[2] == 'X' && pOcupado[5] == 'X' && pOcupado[8] == 'X') ||
	 	 (pOcupado[3] == 'X' && pOcupado[6] == 'X' && pOcupado[9] == 'X') ||
	 	 (pOcupado[1] == 'X' && pOcupado[4] == 'X' && pOcupado[7] == 'X') ||
	 	 (pOcupado[7] == 'X' && pOcupado[5] == 'X' && pOcupado[3] == 'X') ||
	 	 (pOcupado[1] == 'X' && pOcupado[5] == 'X' && pOcupado[9] == 'X')
	  ) {
	  	nTurno = 9;
	  	cout << "Jogador 1 Ganhou o Jogo! \n :)";
	  	cout << "Deseja jogar mais uma vez? Y/N \n ;)";
	  	char escolha;
	  	nVitoriasX++;
	  	cin >> escolha;
	  	if (escolha == ('y') ){
	  		  restart(pOcupado,pV);
			}else {return nTurno;}
	  } else if (
	  	 (pOcupado[1] == 'O' && pOcupado[2] == 'O' && pOcupado[3] == 'O') ||
	 	 (pOcupado[4] == 'O' && pOcupado[5] == 'O' && pOcupado[6] == 'O') ||
	 	 (pOcupado[7] == 'O' && pOcupado[8] == 'O' && pOcupado[9] == 'O') ||
	 	 (pOcupado[2] == 'O' && pOcupado[5] == 'O' && pOcupado[8] == 'O') ||
	 	 (pOcupado[3] == 'O' && pOcupado[6] == 'O' && pOcupado[9] == 'O') ||
	 	 (pOcupado[1] == 'O' && pOcupado[4] == 'O' && pOcupado[7] == 'O') ||
	 	 (pOcupado[7] == 'O' && pOcupado[5] == 'O' && pOcupado[3] == 'O') ||
	 	 (pOcupado[1] == 'O' && pOcupado[5] == 'O' && pOcupado[9] == 'O')){
	  	nTurno = 9;
	  	cout << "\n Jogador 2 Ganhou o Jogo! \n :3";
	  	cout << "\n Deseja jogar mais uma vez? Y/N \n :D";
	  	nVitoriasO++;
	  	char escolha;
	  	cin >> escolha;
	  	if (escolha == ('y') ){
	  		restart(pOcupado,pV);
		}else {return nTurno;}
	}
}

void restart(char pOcupado[10],int pV[10]){
	for (int i = 1; i != 10; i++){
		pOcupado[i] = ' ';
		pV[i] = i;
	}
	nTurno = 1;
	nJogador = 1;
	
	main();
}