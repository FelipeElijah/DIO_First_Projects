import java.util.Random;

public class NumerosRandomicos {
	public static void main (String []args) {
		Random random = new Random();
		int[] numerosAleatorios = new int[5];
		
		for(int i= 0; i< numerosAleatorios.length; i++) {
			int numero = random.nextInt(100);
			numerosAleatorios[i] = numero;
			
			
		}
		
		System.out.println("numero aleat�rio:");
		for(int numero : numerosAleatorios) {
			System.out.println(numero+"");
		}
	
		System.out.println("Antecessor do numero aleat�rio:");
		for(int numero : numerosAleatorios) {
			System.out.println((numero-1)+"");
		}
	
		System.out.println("Sucessor numero aleat�rio");
		for(int numero : numerosAleatorios) {
			System.out.println((numero+1)+"");
		}
	}
}