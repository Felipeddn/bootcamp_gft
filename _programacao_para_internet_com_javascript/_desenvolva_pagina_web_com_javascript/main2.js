
// função para somar
function soma(n1, n2){
    return n1 + n2
}

// alert("o resultado da soma é " + soma(5, 10))

// função para substituir nome

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

// alert(setReplace("vai Japão", "Japão", "Brasil"))

// função para demonstrar escopo das variaveis
var validar = 0

function validaIdade(idade){
    var validar
    if (idade >= 18){
        var validar = true
    } else {
        validar = false
    }

    return validar
}

// var idade = prompt('Qual a sua idade?')

// console.log(validaIdade(idade))

// console.log(validar)

function mensagem(){
    alert('Obrigado por clicar!')
}

// info = document.getElementById('info')

// estava colocando o conteudo da função dentro do parenteses



function mudarMensagem(){
    
    document.getElementById('info').innerHTML = 'Obrigado por clicar!'
    setInterval( () => {
        document.getElementById('info').innerHTML = `Clique no botão e veja a mensagem!`
    }, 5000)
    // document.getElementById('info').innerHTML = '<b>Obrigado por clicar</b>'
    // info.innerText = 'Obrigado por clicar'
    // console.log(document.getElementById('info'))
}

function redirecionar(){
    // abre em outra aba
    window.open('https://www.youtube.com/watch?v=E0eM349w4SA')
    // abre na mesma aba
    // window.location.href = 'https://www.youtube.com/watch?v=E0eM349w4SA'
}

function trocar(elemento){
    // document.getElementById('caixa').style.backgroundColor = "rgb(255, 90, 90)"
    elemento.style.backgroundColor = 'rgb(255, 90, 90)'
    // document.getElementById('caixa').innerHTML = 'O mouse esta sobre a caixa'
    elemento.innerHTML = 'O mouse está sobre a caixa'
    // document.getElementById('caixa').style.font.fontcolor = 'white'
    // alert('trocar!')
}

function voltar(elemento){
    // document.getElementById('caixa').innerHTML = 'Passe o Mouse aqui'
    elemento.innerHTML = 'Passe o Mouse aqui!'
    // document.getElementById('caixa').style.backgroundColor = "rgb(213, 215, 218)"
    elemento.style.backgroundColor = 'rgb(213,215,218)'
}

function carregar (){
    alert('Página Carregada!')
}

function mudar (elemento){
    // console.log(typeof(elemento.value))
    switch(elemento.value){
        case '1':
            document.getElementById('caixa').style.backgroundColor = 'rgb(213,215,218)'
        break
        case '2':
            document.getElementById('caixa').style.backgroundColor = 'rgb(130, 130, 255)'
        break
        case '3':
            document.getElementById('caixa').style.backgroundColor = 'rgb(90, 255, 90)'
        break
        default:
            console.log('padrão')
        break
    }   
}