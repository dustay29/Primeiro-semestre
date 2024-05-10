
// let notas = [];
// let nota
// let maior = 0
// let menor = 10
// let soma = 0
// for (cont = 0;cont < 6;cont++){
//     nota = Number (prompt("Digite uma nota de 0 a 10"))
//     notas.push(nota);
//     soma += nota
//     if (nota > maior){
//         maior = nota
//     }
//     if (nota < menor){
//         menor = nota
//     }
// }
// let somaFinal = soma - maior - menor
// somaFinal = somaFinal / 4
// console.log (notas)
// console.log (maior)
// console.log (menor)
// console.log (somaFinal)

let inteiros = [];
let num
let numImpar = 0
let numPar = 0

for (let cont = 0; cont < 5; cont++){
    num = Number (prompt("Digite 5 números inteiros: "))
    inteiros.push(num);
    if (num => num % 2 != 0){
        numImpar = num
    }else{
        numPar = num
    }
}
console.log (inteiros)

