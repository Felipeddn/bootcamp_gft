// * Enhanced object literals

var professor =  'Celso Henrique da Silva';

// var objeto = {
//     instituicao : 'Digital Innovation One',
//     professor: professor
// };

// short hand para atribuir uma variavel a uma propriedade do objeto
/*
var objeto = {
    instituicao : 'Digital Innovation One',
    // É como se a linha debaixo estivesse escrito dessa forma -> professor: professor
    professor
};
*/
// esse console.log prova que a propriedade professor recebeu a variavel professor
// console.log(objeto);
/*
function horaDeEstudar (){
    console.log('https://web.digitalinnovation.one/')
};

var objeto = {
    horaDeEstudar,
    instituicao : 'Digital Innovation One',
    professor
};
*/

// horaDeEstudar();

// console.log(objeto);

// objeto.horaDeEstudar()
/*
var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor
};
*/
// objeto.horaDeEstudar();

var nome_da_propriedade = 'aluno';

/*
var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor
};
*/

// objeto[nome_da_propriedade] = 'Felipe Dantas';
// objeto[nome_da_propriedade+'javascript'] = 'Felipe Dantas'

// console.log(objeto.aluno);
// console.log(objeto.alunojavascript)

// console.log(objeto);

var objeto = {
    horaDeEstudar(){
    console.log('https://web.digitalinnovation.one/')
    },
    instituicao : 'Digital Innovation One',
    professor,
    [nome_da_propriedade + 'javascript']: 'Felipe Dantas'
};

console.log(objeto)

console.log(objeto.alunojavascript)

