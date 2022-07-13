import java.util.Scanner;

public class MaiorNumeroEMedia {
	public static void main (String []args) {
		Scanner scan = new Scanner(System.in);
		int contador = 0;
		int numero;
		int maior = 0;
		int soma = 0;		
		do {
		System.out.println("digite o numero");
		numero = scan.nextInt();
		soma= soma+ numero;
		contador++;
		
		if(maior<numero)maior = numero;
		
		}while(contador<5);
		
		System.out.println("O maior numero foi "+ maior);
		System.out.println("O maior numero foi "+ (soma/2));
	}
}
