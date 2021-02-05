// todos os alerts estão comentados por conta do incomodo que gera quando o vs code está com salvamento automático.

// variaveis var, let e const 
var nome = "Felipe Dantas"
var idade = 30
var idade2 = 10

var idade3 = "30"
var idade4 = "10"

var frase = "Japão é o melhor time do mundo!"

var n1 = 5
var n2 = 10
/*
alert(`Meu primeiro JS`)

alert(`Bem vindo!! ${nome}`)

alert(`${nome} tem ${idade}`)
*/

// aqui ele realiza operações
// alert (idade + idade2)

// aqui ele concatena strings
// alert (idade3 + idade4)

console.log(nome)
console.log(idade + idade2)
console.log(frase)

// método replace() substitui strings 
console.log(frase.replace('Japão', 'Brasil'))

// alert(frase.replace('Japão', 'Brasil'))

// método toUpperCase() - Retorna string em caixa alta
console.log(frase.toUpperCase())

// método toLowerCase() - retorna string em caixa baixa
console.log(frase.toLowerCase())
console.log(n1 * n2)

// ! Parte 2 

var lista = ['maçã', 'pera', 'laranja']
console.log(lista)

console.log(lista[1])

// alert(lista[1])

// metódo para adicionar um valor a uma lista nomeDaLista.push(valor)

lista.push('uva')

console.log("Lista depois do push " + lista)

// método para tirar um item de uma lista nomeDaLista.pop()

lista.pop()

console.log("Lista depois do pop " + lista)

// propriedade para ver o tamanho da lista nomeDaLista.length

console.log("O tamanho da lista é " + lista.length)

// método para mudar a ordem de apresentação da lista do ultimo para o primeiro

console.log("A lista do ultimo indice para o primeiro: " + lista.reverse())

// o array é considerado um objeto
console.log(typeof(lista))

// porem um item de uma lista é considerado uma string
console.log(typeof(lista[1]))

// método toString() ajuda a executar outras propriedades e métodos relacionados a string
console.log("Essa lista que é objeto vai virar string " + lista.toString())

// quando o array está concatenado ele vira uma string automaticamente (hipotese)

// selecionando a primeira letra do primeiro elemento
console.log("Essa é a primeira letra da primeira palavra da lista " + lista.toString()[0])

// método join() altera a apresentação dos elementos baseado no conteúdo do parenteses.
console.log("Lista com apresentação modificada " + lista.join(" - "))

// dicionario, objeto

var fruta = {nome: "maçã", cor: "vermelha"}

console.log(fruta.nome)
console.log(fruta.cor)

var frutas = [{nome: "maçã", cor: "vermelho"},{nome: "uva", cor: 'roxa'}]
console.log(frutas
    )
console.log(frutas[1].nome)

// ! Parte 3 
/*
var idade5 =    18

if(idade > 18){
    alert ('Maior de idade')
} else {
    alert('menor de idade')
}
*/

// var idade6 = prompt('Qual sua idade?')

// if(idade >= 18){
//     alert ('Maior de idade')
// } else {
//     alert('menor de idade')
// }

var count = 0 
while (count > 5){
    console.log(count)
    count++
}

for (count2 = 0; count2 <= 5; count2++){
    alert(count2)
}

// esse comando abaixo é bem mais complexo do que parece, ele está instanciando uma classe de datas e tem muito outros conceitos por tras desse simples comando que não foram abordados.
var data = new Date() 
alert(data)

// método da classe Date para acessar apenas o mês
alert(data.getMonth())

// método da classe Date para acessar os minutos
alert(data.getMinutes())

// método da classe Date para acessar os minutos
alert(data.getHours())

// um pequeno teste...
// alert(data.getHours() + " : " + data.getMinutes())

// em uma pergunta do javascript havia no enuciado Ela passará pelo laço de repetição com "while(count < 5)" imprimindo no console a sequência de números "0, 1, 2, 3, 4, 5" (menor que 5 não mostra o 5) um for para um while assim (tambem tem que ter a lógica não mostrar 5)