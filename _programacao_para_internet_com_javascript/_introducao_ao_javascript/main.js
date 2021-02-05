// todos os alerts estão comentados por conta do incomodo que gera quando vs code está com salvamento automático.

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

// ? Parte 2 array

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
console.log(frutas)
console.log(frutas[1].nome)