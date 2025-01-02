// Atividade 1

// alert ('Olá mundo!')

// ATT 5
// function button() {

// let numero = (prompt('Fale um número'))
// dobro = numero * 2
// metade = numero / 2

// let pagina = document.getElementById('Resultado')
// pagina.innerHTML = `<p>O dobro de ${numero} é ${dobro} e a metade é ${metade}</p>`

// }

// ATT 6

// function button() {

// let numero1 = Number (prompt('Número 1'))
// let numero2 = Number (prompt('Número 2'))

// resultadoo = numero1 + numero2

// let pagina = document.getElementById('Resultado')
// pagina.innerHTML = `<p>O resultado é ${resultadoo}<p>`

// }

// ATT 7
// function button() {

//     let media
//     let media1 = Number (prompt('Primeira Nota'))
//     let media2 = Number (prompt('Segunda Nota'))
//     let media3 = Number (prompt('Terceira Nota'))
    
//     resultadoo = media1 + media2 + media3
//     media    = resultadoo / 3
    
//     let pagina = document.getElementById('Resultado')
//     pagina.innerHTML = `<p>O resultado é ${media}<p>`
    
//     }

// ATT 8

// let contador = 0 
// let res = document.getElementById('result')

// function contar() {
//     contador ++ 
//     res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
// }

// function zerar() {
//     contador = 0
//     res.innerHTML = null
// }

    // ULTIMA ATT MAIS INICIANTE

//  let res = document.getElementById ('result')

//  function button1() {

// res.innerHTML += '<p>Botão 1</p>'

// }

// function button2() {

//     res.innerHTML +='<p>Botão 2</p>'
    
//     }

//     function button3() {

//         res.innerHTML +='<p>Botão 3</p>'
        
//         }

//         function button4() {

//             res.innerHTML += '<p>Botão 4</p>'
            
//             }


//ATT 2.1

// let nota1
// let nota2
// let nota3
// let media

// function notas() {

//      let nota1 = Number (prompt('Primeira Nota'))
//      let nota2 = Number (prompt('Segunda Nota'))
//      let nota3 = Number (prompt('Terceira Nota'))

//      media = (nota1 + nota2 + nota3) /3
    

//     if (media >= 6) {
//         alert (media)
//     }
//     else {
//         alert (media)
//     }
// }

// ATT PAR OU IMPAR

// function numeros() {

//     let numero = (prompt('Escolha um número:'))

//     if (numero % 2 == 0){
//         alert ('PAR')

//     }
//     else{
//         alert ('IMPAR')
//     }
// }


// let res = document.getElementById ('result')

// function numeros(){
//     let num1 = (prompt('Primeiro número:'))
//     let num2 = (prompt('Segundo número:'))

//     if (num1 > num2){
//         res.innerHTML = `<p>Entre os números ${num1} e ${num2}, o número ${num1} é maior.</p>`
//     }
//     else if (num2 > num1){
//         res.innerHTML = `<p>Entre os números ${num1} e ${num2}, o número ${num2} é maior.</p>`
//     }

//     else{
//         res.innerHTML = `<p>Os dois números tem o mesmo valor.</p>`
//     }

// }

// DATA

// let data = new Date
// let res = document.getElementById ('result')

// function numeros() {

// res.innerHTML = `<p>Pelo meus calculos hoje é ${data}<p>`

// }

// function info() {
//     let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
//     let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
//     let agora = new Date
//     let saida = document.getElementById('saida')
//     let dia = agora.getDate()
//     let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
//     let ano = agora.getFullYear()
//     let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
//     let hora = agora.getHours()
//     let min = agora.getMinutes()
//     let seg = agora.getSeconds()
//     saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
//     saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
//     saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
//     saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
//     saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
//     saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
//     saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`

// }

// let agora = new Date
// let res = document.getElementById ('result')
// let ano = agora.getFullYear()

// function numeros() {
//     let idade = Number (prompt('Que ano você nasceu?'))
//     agora = ano - idade
//     res.innerHTML = `<p>Você vai fazer ou fez ${agora} anos em 2024<p>`
// }

// function numeros() {

// let res = document.getElementById ('result')
// let num1 = Number (prompt('NUMERO 1'))
// let num2 = Number (prompt('NUMERO 2'))
// let mensagem = Number (prompt('Escolha alguma dessas opções para fazer o calculo dos números acima:<br> [1] Somar<br> [2] Subtrair<br> [3] Multiplicar<br> [4] Dividir'))
// switch(mensagem){
// case 1: 
//   res.innerHTML = `<p>${num1 +num2}<p> `
// break
// case 2: 
//   res.innerHTML = `<p>${num1 -num2}<p> `
//   break
// case 3: 
//   res.innerHTML = `<p>${num1 *num2}<p> `
//   break
// case 4: 
//   res.innerHTML = `<p>${(num1 /num2)}<p>`
//   break
// }  
// }

// function estacoes() {

// let res = document.getElementById ('result')
// let estacao = (prompt('Qual o mês que você está?'))
// let resultado

// switch(estacao.toUpperCase()){

// case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
// resultado = 'VERAO'
// break

// case 'ABRIL': case 'MAIO': case 'JUNHO':
// resultado = 'OUTONO'
// break

// case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
// resultado = 'INVERNO'
// break

// case 'OUTUBRO': case 'NOVEMBRO':
// resultado = 'PRIMAVERA'
// break

// default:
// resultado = 'INDEFINIDA'
// break
// }
// res.innerHTML = `<p>${resultado} <p>`
// }

function contar() {
    let res = document.getElementById('result')
    let cont = 1

    while (cont <= 10) {
        if (cont % 2 == 0) {   
    res.innerHTML += `<p>${cont}</p>`         
        }
        cont++;
    }
}

function contar() {
    let res = document.getElementById('result')
    let cont = 10

    while (cont >= 1) {
        res.innerHTML += `<p>${cont}</p>`    
        cont--;
    }
}

function contar() {
    let res = document.getElementById('result')
    let comeco = Number (prompt('Digite um número:'))
    let fim = Number (prompt('Digite um número:'))
    res.innerHTML = ''

    while (comeco <= fim) {
        res.innerHTML += `<p>${comeco}</p>`    
        comeco++;
    }
}

function contar() {
    let res = document.getElementById('result')
    let tabuada = Number (prompt('Digite um número:'))
    let cont = 1
        res.innerHTML = ''

    while (cont <= 10) {
    res.innerHTML += `<p>${tabuada*cont}</p>`     
    cont++;    
        }

    }


