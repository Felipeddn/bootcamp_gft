// * Default function arguments (argumentos padrão de funções)
function exemplo1(){
    function multiply (a, b){
        return console.log( a * b )
    }
    console.log("Aqui começa o exemplo 1")
    multiply(5)
}

exemplo1()

function exemplo2(){
    function multiply (a, b){
    b = b || 1
    return console.log( a * b )
    }

    console.log('Aqui começa o exemplo 2')

    multiply(5)

    multiply(5, 0)

}

exemplo2()

// deu meio errado aqui :(
// function exemplo3(){
    function multiply (a, b){
        // console.log(typeof(b))
        b = typeof b === 'undefinied' ? 1 : b
        return console.log( a * b )
    }

    console.log('Aqui começa o exemplo3')

    multiply(5, 0)

    multiply(5)

    multiply(5, 5)

// }

// exemplo3()

// esse deu certo!
function exemplo4(){
    function multiply (a, b){
        // console.log(typeof(b))
        if (typeof b === 'undefined'){
            b = 1 
        }
        return console.log( a * b )
    }

    console.log('Aqui começa o exemplo4')

    multiply(5, 0)

    multiply(5)

    multiply(5, 5)
}

exemplo4()

function exemplo5(){
    function multiply(a, b = 1){
        return console.log (a * b)
    }
    console.log('Aqui começa o exemplo 5')
    
    multiply(5, 0)
    
    multiply(5)
    
    multiply(5, 5)


    multiply(5, undefined)
}

exemplo5()

function exemplo6(){
    function multiply(a = 1, b = 1){
        return console.log (a * b)
    }
    
    console.log('Aqui começa o exemplo 6')

    multiply(5, 0)
    
    multiply(5)
    
    multiply(5, 5)
    
    multiply(undefined, 5)
}

exemplo6()

function exemplo7(){
    function multiply(a = 1, b = a){
        return console.log (a * b)
    }
    console.log('Aqui começa o exemplo 7')
    
    multiply(5, 0)
    
    multiply(5)
    
    multiply(5, 5)
    
    multiply(undefined, 5)

    multiply(5, undefined)
    
}

exemplo7()

function exemploErrado1(){
    function multiply( b = a, a = 1){
        return console.log (a * b)
    }
    console.log('Aqui começa o exemplo 7')
    
    multiply(5, 0)
    
    multiply(5)
    
    multiply(5, 5)
    
    multiply(undefined, 5)

    multiply(5, undefined)
}

// exemploErrado1()

function exemplo8(){
    function randomNumber(){
        console.log('Essa linha prova que a função é executada toda vez que é chamado a função multiply')
        return Math.random() * 10
    }
    
    function multiply(a = 1, b = randomNumber()){
        return console.log (a * b)
    }

    console.log('resultado da LINHA ABAIXO é da função randoNumber')
    
    console.log(randomNumber())

    console.log('Aqui começa o exemplo 8')
    
    multiply(5, 0)
    
    multiply(5)
    
    multiply(5, 5)
    
    multiply(undefined, 5)
    
}

exemplo8()