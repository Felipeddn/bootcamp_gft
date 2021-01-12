programa
{
	
	funcao inicio()
	{
		real janeiro, fevereiro, marco, abril, media, total
		escreva ("== Programa - Vendas ==\n\n")
		escreva ("Informe o valor da(s) venda(s) de Janeiro: \n")
		leia (janeiro)	
		escreva ("Informe o valor da(s) venda(s) de Fevereiro: \n")
		leia (fevereiro)	
		escreva ("Informe o valor da(s) venda(s) de Março: \n")
		leia (marco)	
		escreva ("Informe o valor da(s) venda(s) de Abril: \n")
		leia (abril)

		total = (janeiro + fevereiro + marco + abril)

		media = (janeiro + fevereiro + marco + abril)/4

		escreva ("O valor total das vendas foi: " + total + "\n")
		escreva ("A média das vendas foi: " + media)
	}
}
