import java.util.Scanner;

public class Tabuadas {
	public static void main (String []args) {
		Scanner scan = new Scanner(System.in);
		int numero;
		int multiplicador =0;
		int resultado;
		System.out.println("Digite o numero a ser multiplicado:");
		numero = scan.nextInt();
		
		for(int i=0; i <= 10; i++) {
			resultado = numero*multiplicador;
			System.out.println(numero+"*"+ multiplicador +"="+ resultado);
			multiplicador++;
		}
	}
}
