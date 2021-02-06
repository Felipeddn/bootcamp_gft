* Programacao para internet com JavaScript - Rafael Galleani

# Escopo de variável em uma função 

Uma variavel pode estar disponivel em um momento do programa (escopo local) ou disponivel por todo o programa (escopo global), 

Em um código podemos verificar isso através do exemplo da aula

uma variavel definida apenas dentro da função e não retornada através do comando return está disponivel apenas localmente (durante a execução da função), por isso o console.log(validar) retorna undefinied (não foi definida).

Uma variavel global está disponivel durante todo o programa e isso pode ser visto no console.log(validar) retornando um valor no console.

isso é importante para saber onde podemos acessar uma variavel e tem relação com a performance do programa afinal definir diversas variaveis globalmente vai tornar o uso da memória ram maior!

