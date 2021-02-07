// function log () {
//     console.log('algo acontece aqui')
//     // return true
// }

var log = function () {
    console.log('algo acontece aqui')
    // return  true
}

// function algoAqui( function (params) {
//     return true   
// } ) 
//     {
//     if ( true ){
//         console.log('recebeu true')
//     }
// }
log()

var sum = function (a , b) {
    return a + b
}

console.log(sum(5, 5))

mensagem = 'Isso é uma arrow function'

mensagem2 = 'Isso é uma mensagem em uma arrow function'

var mostrarMensagem = mensagem => console.log(mensagem)

mostrarMensagem(mensagem)

mostrarMensagem(mensagem2)

var mostrarMensagem2 = (mensagem, mensagem2) => console.log(mensagem + ' ' + mensagem2)

mostrarMensagem2(mensagem, mensagem2)


var mostrarMensagem3 = (mensagem, mensagem2) => {
    var mensagem_completa
    mensagem_completa = ('mensagem 1: ' + mensagem + ', mensagem 2: ' + mensagem2)
    return console.log(mensagem_completa)
}

mostrarMensagem3(mensagem, mensagem2)

var letra = (a = 5) => console.log(a)

letra()

var createObject = () => ({ 3: 'terceiro'})

console.log(createObject())

// função construtora

function car() {
    this.color = 'blue'
}

var car2 = new car()

console.log(car2.color)

// isso aqui não existe!

// var car3 = () => this.color = 'yellow'

// var car4 = new car3()

// isso retorna um maravilhoso e incrivel erro! e está tudo bem.
// console.log(car4.color)

// * Esse comando abaixo é uma forma de ver o contexto da função
// console.log(this)

var exemploObjeto = {
    // o método bind() fixa esse contexto independente de onde for executado o código
    showContext : function showContext() {
        this.log('teste')

        
        setTimeout(function () {
            // console.log(this)
        // esse trecho retorna um erro e para corrigir isso é necessario usar o método bind
            this.log('after 1000ms')
        }.bind(this), 1000)
        // esse tipo de solução é bem problematica
    },
    log: function  log(value) {
        console.log(value)
    }
}

exemploObjeto.showContext()

// veja como fica o código com arrow function

var exemploObjeto2 = {
    showContext :  function showContext(){
        setTimeout( () => {
            this.log('after 1000ms exemplo 2')
        },1000)
    },
    log: function log(value){
        console.log(value)
    }
}

exemploObjeto2.showContext()