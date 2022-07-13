import java.util.Scanner;

public class ParEImpar {
	public static void main (String []args) {
	
	Scanner scan = new Scanner(System.in);
	
	int quantidadeDeNumero;
	int contador = 0;
	int numero;
	int quantidadePares = 0;
	int quantidadeImpares = 0;
	
	System.out.println("Quantidade de números:");
	quantidadeDeNumero = scan.nextInt();
	
		do {
			System.out.println("Número:");
			numero = scan.nextInt();
			if(numero %2 == 0) { 
			quantidadePares++;
			} else {
				quantidadeImpares++;
			}
			
			contador++;
		} while (contador < quantidadeDeNumero);
		
	System.out.println("A quantidade de numero pares foi de:"+ quantidadePares);
	System.out.println("A quantidade de numero pares foi de:"+ quantidadeImpares);
	}
}
