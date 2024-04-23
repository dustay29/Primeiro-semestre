// 4- Os números primos possuem várias aplicações dentro da Computação, por
// exemplo, na criptografia. Um número primo é aquele que é divisível apenas
// por um e por ele mesmo. Faça um programa que peça ao usuário para digitar
// um número e informe se ele é primo. Depois implemente um laço de repetição
// para solicitar cinco números inteiros e mostre na tela se são primos ou
// não.

// let numero = Number (prompt("Digite um número:"))
// let i = 2
// let divisores = 0

// while(i < numero){
//     if (numero % i == 0){
//         divisores++
//     }

//     i++
// }

// if (divisores == 0){
//     alert ("É primo")
// }else{
//     alert ("Não é primo")
// }

//5- Você está organizando um festival de música e precisa calcular o tempo
// total de reprodução de uma lista de músicas. Solicite ao usuário o nome de
// cada música e a duração em minutos, repetidamente, até que ele não queira
// mais adicionar músicas. Em seguida, exiba o tempo total de reprodução da
// lista de músicas.

// let nomedamusica
// let tempo
// let i = -1

// while (nomedamusica != "parar"){
// nomedamusica = (prompt("Digite o nome da música: (escreva PARAR caso não deseja mais colocar músicas na lista)"))
// tempo = Number (prompt("Digite quantos minutos tem a música: (caso tenha escrito PARAR coloque o número ZERO")) 
// tempo = tempo + tempo
// i++
// }
// alert ("A(s) música(s) tem " + tempo + " minutos, no total são " + i + " músicas")

let tempoMusica, nomeMusica
let total = 0
let horas = 0

do{
    tempoMusica = Number (prompt("Tempo da musica:"))
    if(tempoMusica > 0){
        nomeMusica = prompt("Nome da música:")
        total += tempoMusica

    }
}while (tempoMusica!=0);

alert ("Soma dos tempos: " + total);

// while(total >= 60){
//     total -= 60;
//     horas++
// }
// minutos = total