programa
{
	
	funcao inicio()
	{
		cadeia frutas[4]
		inteiro contador , posicao
		posicao = 0
		contador = 0

		frutas[0] = "Maçã"
		frutas[1] = "Pera"
		frutas[2] = "Uva"
		frutas[3] = "Jaca"

		faca{
			posicao = contador + 1
			escreva("A " + posicao +  "º fruta é " + frutas[contador] + "\n")
			contador++
		}enquanto (contador <= 3)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 256; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */