* Desenvolvimento avançado com JavaScript ES6 - Celso Henrique da Silva

# Enhanced object literals

## Maneira clássica de criação de objetos

Uma forma de criar um objeto e atribuir um valor para uma propriedade está no código abaixo:

* código
var objeto = {
    instituicao : 'Digital Innovation One'
};

### atribuido uma propriedade através de referência de variavel

É possivel usar uma variavel para ser o valor atribuido a propriedade do objeto

* código
var professor =  'Celso Henrique da Silva'

var objeto = {
    instituicao : 'Digital Innovation One',
    professor: professor
};

### short hand (atalho) do EcmaScript 6 para atribuir uma variavel a uma propriedade

O ecmascript 6 introduziu um atalho onde podemos atribuir uma váriavel a uma propriedade de um objeto quando ambos possuem o mesmo nome.

* código
// short hand para atribuir uma variavel a uma propriedade do objeto
var objeto = {
    instituicao : 'Digital Innovation One',
    // É como se a linha debaixo estivesse escrito dessa forma -> professor: professor
    professor
};

Essa atalho também funciona para funções

* código
function horaDeEstudar (){
    window.open('https://web.digitalinnovation.one/')
}

var objeto = {
    horaDeEstudar,
    instituicao : 'Digital Innovation One',
    professor
};

Depois disso é possivel acessar o método horaDeEstudar() que retorna o link da pagina de estudos mais incrivel do Brasil. (Quando a internet está boa claro!) 
* código
objeto.horaDeEstudar()

o jeito tradicional de criar um método é colocar a função diretamente dentro do objeto como foi feito com a propriedade instituição. Como abaixo.

* código
var objeto = {
    horaDeEstudar: function horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor
};

E para isso tambem existe um short hand 

* código

var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor
};

### atribuido o contéudo de uma variavel como o nome de uma propriedade

Para declarar o conteúdo de uma variavel como o nome de uma propriedade era feito todos os passos abaixos

* código

var nome_da_propriedade = 'Aluno';

var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor
};

objeto[nome_da_propriedade] = 'Felipe Dantas'

é possivel tambem complementar o nome concatenando com o sinal de +

objeto[nome_da_propriedade+'javascript'] = 'Felipe Dantas'

para fazer essas operações acima é necessario sempre declarar o objeto antes.

### short hand de atribuição de conteúdo de variavel como nome de uma propriedade

Esse comando acima pode ser realizado diretamente dentro do objeto.

var nome_da_propriedade = 'Aluno';

var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor,
    [nome_da_propriedade+'javascript']: 'Felipe Dantas'
};

Esses short hands do ES6 (ecmascript 6) torna o código mais legivel e evita a constução de bastante linha de código.

