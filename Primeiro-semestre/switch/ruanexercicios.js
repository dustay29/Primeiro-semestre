// 1- Crie um programa que mostre os números de 1 a 10 utilizando o while.

// let i = 0

// while (i <= 10){
//     console.log (i)
//     i++
// }

// 2- Supondo que a população de um país A seja de 80.000 habitantes com uma
// taxa anual de crescimento de 3% e que a população de B seja 200.000
// habitantes com uma taxa de crescimento de 1.5%. Faça um programa que
// calcule e escreva o número de anos necessários para que a população do
// país A ultrapasse ou iguale a população do país B.

// let anos = 0
// let paisA= 80000
// let paisB= 200000
// while (paisB > paisA){
//     paisA += paisA * (3/100)
//     paisB += paisB * (1.5/100)
//     anos++

// if (paisA > paisB){
//     console.log ("A população do primeiro país (" + paisA +") é maior que a população do segundo país ("+ paisB +") e demorou " + anos + " anos.")
// }
// }

// 3- Você é um colecionador de video games e resolveu ir a uma loja para
// comprar alguns jogos raros. Porém, você tem apenas R$2000 para gastar.
// Faça um programa que pergunte o nome do jogo e o valor, repetidamente.
// Caso o valor ultrapasse R$2000, encerrar (desconsiderando o último jogo).
// Extra: Mostrar na tela o total gasto em reais nos jogos, a quantidade de
// jogos, o mais caro e o mais barato.

let valorGastar = 2000
let valor = 0
let quantidade = 0
let jogo = ""
let jogoCaro
let jogoBarato
while (valorGastar > 0){
jogo = (prompt("Qual o nome do jogo?"))
valor = Number (prompt("Qual o valor do jogo? (orçamento "+ valorGastar + ")" ))
valorGastar = valorGastar - valor
if (quantidade == 0){
    jogoCaro.nome = nome
    jogoCaro.valor = valor
    jogoBarato.nome = nome
    jogoBarato.valor = valor
}
if (valorGastar < 0){
    console.log ("\n")
    console.log ("Jogo mais caro " + jogoCaro.nome + " valor de " + jogoCaro.valor)
    console.log ("Jogo mais barato " + jogoBarato.nome + " valor de " + jogoBarato.valor)
    break
}
}