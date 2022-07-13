
public class OrdemInvertida {
	public static void main (String []args) {
		
		String[] nomes = {"João", "Souza", "Almeida", "Silva"};
		
		for( int i= (nomes.length - 1); i>= 0; i--) {
			System.out.println(nomes[i]+" ");
		}
		
		double[] numeros = {1, 9, 7, 5};
		
		for( int i= (numeros.length - 1); i>= 0; i--) {
			System.out.println(numeros[i]+" ");
		} 
	}
}
