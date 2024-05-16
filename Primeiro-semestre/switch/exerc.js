
//  let notas = [];
//  let nota
//  let maior = 0
//  let menor = 10
//  let soma = 0
//  for (cont = 0;cont < 6;cont++){
//      nota = Number (prompt("Digite uma nota de 0 a 10"))
//      notas.push(nota);
//      soma += nota
//      if (nota > maior){
//          maior = nota
//      }
//      if (nota < menor){
//          menor = nota
//      }
//  }
//  let somaFinal = soma - maior - menor
//  somaFinal = somaFinal / 4
//  console.log ("Suas notas foram: " + notas)
//  console.log ("A maior nota foi: " + maior)
//  console.log ("A menor nota foi: " + menor)
//  console.log ("A sua média final foi: " + somaFinal)


//2
// let inteiros = [];
// let num
// let numImpar = []
// let numPar = []

// for (let cont = 0; cont < 5; cont++){
//     num = Number (prompt("Digite um número inteiro: "))
//     inteiros.push(num);
//     if (num % 2 != 0){
//      numImpar.push(num)
//     }
//     else{
//     numPar.push(num)
//    }
// }

// console.log (numPar)
// console.log (numImpar)


////3
// let fila = []

// while (fila.length < 5){
// let i = Number (prompt("Digite 1 para ENTRAR ou 2 para SAIR: "))    
// if (i == 1){
//     let nome = (prompt("Qual o seu nome? "))
//     fila.push(nome)
//  }
// else if (i == 2){
//     fila.shift()
// }
// else {
//     alert ("Comando não encontrado!")
// }
// }
// alert ("A fila está cheia, temos cinco pessoas nela (" + fila + ")")

//4

let anos = []
for (let i = 2010; i <= 2019; i++){
    let a = (prompt("Teve alistamento em "+ i + " (S or N)? "))
    if (a == "S"){
    anos.push ("S")
    }
    if (a == "N"){
    anos.push ("N")
    }
}
alert (a)




