* Desenvolvimento avançado com JavaScript ES6 - Celso Henrique da Silva

# Estrutura de uma função

Uma função no JavaScript é escrito da seguinte forma:

function nome_da_função ( parametros ) {
    código_para_ser_executado
    ...
    ...
    return 
}

* `function` - palavra reservada da linguagem de programação que inicia a função

* `nome_da_função` - qualquer nome dado a função para identifica-la

* `paramentros` - argumentos que pode ser usada e tratada dentro da função, esses parametros pode sem fornecidos de fora da função para dentro da mesma

* `código_para_ser_executado` - o bloco de código para ser executado

* `return` - um valor opcional que pode ser retornado pela função

## função anonima

uma função anonima é criada omitindo o nome da função, isso era útil para colocar uma função em uma variavel ou como parametro de outra função

function ( parametros ) {
    código_para_ser_executado
    ...
    ...
    return 
}

## Arrow function

=> esse formato lembra uma flecha e é dele que vem a denominação de arrow function

Arrow functions são funções anonimas, que são escritas de forma mais curta

existem diferentes níveis de uso da arrow function

* a forma mais simples
var mostrarMensagem = mensagem => console.log(mensagem)

Nesse formato não precisamos informar a palavra reservada function, não precisamos usar chaves, não precisamos usar parenteses

* quando usamos mais de um parametro

var mostrarMensagem2 = (mensagem, mensagem2) => console.log(mensagem + ' ' + mensagem2)

Aqui é necessario usar parenteses por conta da existencia de mais de um argumento

var mostrarMensagem3 = (mensagem, mensagem2) => {
    var mensagem_completa
    mensagem_completa = mensagem + ' ' + mensagem2
    return mensagem_completa
}

essa é uma versão 'completa' da arrow function sua estrutura precisa de parenteses e chaves para delimitar parametros e bloco de códigos respectivamente, é necessario o uso de return tambem.

* existe algumas exceções para essas regras!

arrow function com desestruturação de objetos

desestruturar um objeto é acessar valores especifico de um objeto e armazena-lo em uma variavel, podemos desestruturar um array também.



var a = ({ a }) => a + b

Esse tipo de declaração precisa do uso do parenteses

um pouco mais sobre desestruturação de array e objeto
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao

https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt

Default values

var (a = 5) => console.log(a)

um objeto literal {}

var objeto = {
    1 : 'primeiro'  
}

para retornar um objeto literal é necessario coloca-lo em um parentese

var objeto2 = () => ({2: 'segundo'})

var createObject = () => ({ 3: 'terceiro'})

Tem muito conceito nessa aula que não foi abordado e está ficando complicado acompanhar tudo vou precisar estudar bem mais para entender essa aula.

mas para objetivo de prosseguimento não é possivel usar arrow function em uma função construtora!

## Caracteristica de Hoisting

arrow function não irá executar antes de ter sido declarada, sinceramente o uso do var está depreciado por diversos problemas então é um assunto bem complexo.

### segundo o professor uma utilização muito boa da arrow function é no seguinte momento:

rapaz conceito tenso! vou apenas práticar mas confesso a total falta de entendimento no que foi explicado!

pelo exemplo o que foi compreendido é que algumas funções usam contextos globais e para especificar um contexto era usado o método bind() e atualmente a arrow functions parece ter esse método por padrão.

essa solução através do bind() era bem complicada e problematica porque o programador poderia esquecer de usa-lo!

outra solução era colocar em uma variavel o contexto do this

o contexto da arrow function sempre é o contexto léxico que ele está inserido.