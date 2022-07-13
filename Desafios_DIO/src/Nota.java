import java.util.Scanner;

public class Nota {
	public static void main (String []args) {
		Scanner scan= new Scanner(System.in);
		int nota;
		System.out.println("digite a nota");
		nota = scan.nextInt();
		while(nota < 0 | nota > 10) {
			System.out.println("Nota inválida, por favor, digite novamente");
			nota = scan.nextInt();
		}
		
		System.out.println("nota aceita, aguarde o processamento");
	}
}
