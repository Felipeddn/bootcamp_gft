* Desenvolvimento avançado com JavaScript ES6 - Celso Henrique da Silva

# Default function Arguments

No desenvolvimento de funções um problema comum para os programadores são algumas inconsistencias relacionados a passagem de parametros para a função.

veja esse exemplo 

* código
function multiply (a, b){
    return console.log( a * b )
}

multiply(5)

Esse uso da função multiply vai retornar um valor NaN (not a number)

como os programadores costumavam resolver isso?

eles usavam uma lógica muito inteligente mas uma bela de uma gambiarra*

* código
function multiply (a, b){
    b = b || 1

    return console.log( a * b )
}

multiply(5)

Isso resolvia o problema da passagem de um argumento mas trazia um novo problema!

multiply(5, 0) 

Isso retornava 5 e 5 x 0 não é 5. O JavaScript transformou o valor 0 em um valor false

então novamente os programadores desenvolveram outra forma de solucionar isso muito criativo e inteligente (eu não sou capaz de pensar nessas soluções tão inteligentes ainda, por isso acho inteligente!) mas outra gambiarra*

* código
function multiply (a, b){
    b = typeof b === 'undefinied' ? 1 : b

    return console.log( a * b )
}

multiply(5, 0)

multiply(5)

multiply(5, 5)

Esse exemplo acima também pode ser feito do jeito abaixo:

* código
function multiply (a, b){
    if (typeof b === 'undefined'){
        b = 1 
    }
    return console.log( a * b )
}

console.log('Aqui começa o exemplo4')

multiply(5, 0)

multiply(5)

multiply(5, 5)

Esses códigos possui alguns problemas: 
- 1 - o código é verboso (muita coisa é escrita)
- 2 - correções de bug e implementações realizadas por outros programadores demandaria um tempo maior para compreender o código.

* O ECMAScript 6 (ES6) trouxe a capacidade de poder informar um valor por padrão para a função tornando essa situação mais simples de contornar

* código
function multiply(a, b = 1){
    return console.log (a * b)
}

multiply(5, 0)

multiply(5)

multiply(5, 5)

esse comando é para provar que ele faz a verificação do valor e o resultado será 5.
multiply(5, undefined)

e esse código funciona muito bem! tornando ele bem simples isso é o default argument function

E isso funciona para o argumento a tambem

* código
function multiply(a = 1, b = 1){
    return console.log (a * b)
}

multiply(5, 0)

multiply(5)

multiply(5, 5)

essa linha de comando comprova isso!
multiply(undefined, 5)

Outro recurso interessante que essa atualização trouxe foi o poder de fazer referencia a outro parametro

* código
function multiply(a = 1, b = a){
    return console.log (a * b)
}

multiply(5, 0)

multiply(5)

multiply(5, 5)

essa linha de comando comprova isso!
multiply(undefined, 5)

para isso a ordem importa aqui, por exemplo, estaria errado!

substitua essa linha no exemplo anterior e você poderá verificar que não funciona!
function multiply( b = a, a = 1){

## lazy evaluation

Lazy evaluation é a execução de uma função apenas quando for necessario essa execuçaõ.

vamos ver um exemplo no código

* código

function randomNumber(){
    console.log('Essa linha prova que a função é executada toda vez que é chamado a função multiply')
    return Math.random() * 10
}

function multiply(a = 1, b = randomNumber()){
    return console.log (a * b)
}

console.log(randomNumber())

multiply(5, 0)

multiply(5)

multiply(5, 5)

multiply(undefined, 5)

essa função é muito util para gerar id aleatórios por exemplo!