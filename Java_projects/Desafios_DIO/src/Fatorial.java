import java.util.Scanner;

public class Fatorial {

	public static void main (String []args) {
		Scanner scan= new Scanner(System.in);
		
		int numero;
		System.out.println("Digite o numero");
		numero= scan.nextInt();
		
		int multiplicador = 1;

		for(int i = numero; i >= 1; i--) {
		
			multiplicador = multiplicador*i;
		}
		System.out.println("o resultado foi: " + multiplicador);
	}
}