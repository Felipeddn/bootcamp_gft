programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, resultado, numero
		contador = 0
		limite = 10
		numero = 0

		escreva ("Digite um valor que será usado para calcular a tabuada \n\n")
		leia (numero)
		escreva ("Digite até qual numero você deseja calcular a tabuada \n\n")
		leia (limite)
		faca 
		{
			resultado = numero * contador
			escreva (numero + " x " + contador + " = " + resultado + "\n")
			contador ++
		} 
		enquanto ( contador <= limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 345; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */