//Autor Felipe com auxilio do professor Denilson Bonati
// código para calcular a média do aluno e retorna a sitação do aluno no curso

programa
{
	
	funcao inicio()
	{	
		
		real nota1, nota2, nota3, nota4, media
		cadeia aluno

		escreva ("Digite o nome do aluno:")
		leia (aluno)
		//escreva ("O seu nome é : " + aluno)
		escreva ("Digite a nota 1: ")
		leia (nota1)
		escreva ("Digite a nota 2: ")
		leia (nota2)
		escreva ("Digite a nota 3: ")
		leia (nota3)
		escreva ("Digite a nota 4: ")
		leia (nota4)

		media = (nota1 + nota2 + nota3 + nota4)/4

		escreva ("O aluno " + aluno + " obteve a média: " + media)

		// Verifica se a média é maior ou igual a 7
		
		se(media >= 7){
				escreva ("\n" + "Parabéns " + aluno + " Você foi aprovado :)")
		}

		// caso a média seja menor que 7 será executado o código abaixo
		
		senao {
			escreva("\n" + aluno + "Infelizmente você foi reprovado :(")	
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 823; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */