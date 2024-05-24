// function mostrarMensagem(){
//     //Bloco de códiga que vai ser executado quando a função for chamada.
//     alert ("Seja bem vindo ao sistema!")
// }

// //Executar a função

// mostrarMensagem()



// function somar(num1,num2){
//     let soma = num1 +num2
//     alert ("A soma de " + num1 + " com " + num2 + " é " + soma)
// }

// //Chamar a função

// somar(4,5)
// somar (30,40)

// Function + If/else

// function verificarDano(dano){
//     if(dano > 10){
//         alert("Dano critico")
//     }else{
//         alert("Dano baixo")
//     }
// }
// verificarDano(5)
// verificarDano(10)
// verificarDano(35)

// function somarComRetorno(num1,num2){
//     let soma = num1 + num2
//     return soma
// }

// let resultado = somarComRetorno(30,40)
// alert ("O resultado foi " + resultado)

//Atividade 1

//  function calcular(largura,profundidade){
//      alert ("terreno de " + largura + "m de largura " + profundidade + "m de profundidade = " + largura*profundidade + "m2 ")
//      return largura*profundidade
//  }
//  let terrenoPadrao = calcular(50,40)
//  let terrenoSobrado = calcular(30,40)
//  let terrenoMansao = calcular(100,100)
//  let terrenoComercial = calcular (40,40)

//Atividade 2

// let num = Number (prompt("Digite um número:"))

//  function reconhecer(num){
//      if (num %2==0 ){
//          return "Par"

//      }else{
//          return "Impar"
//      }
//  }
//  let resposta = reconhecer (num)
//  alert (resposta)

//Atividade 3

// function somar (a,b){
//     alert (`A soma de ${a} com ${b} é igual a ${a+b}`)
// }

// function subtra (a,b){
//     alert (`A subtração de ${a} com ${b} é igual a ${a-b}`)
// }

// function multiplicacao (a,b){
//     alert (`A multiplicação de ${a} com ${b} é igual a ${a*b}`)
// }

// function divisao (a,b){
//     alert (`A divisão de ${a} com ${b} é igual a ${a/b}`)
// }

// while(true){
// let a = Number (prompt("Digite um número:"))
// let b = Number (prompt("Digite um número:"))
// let escolha = (prompt("Escolha a operação que você deseja.\n 1 - Soma 2 - Subtração 3 - Multiplicação 4 - Divisão"))
// if(escolha==1) somar(a,b)
// if(escolha==2) subtra(a,b)
// if(escolha==3) multiplicacao(a,b)
// if(escolha==4) divisao(a,b)
// }

// Extra 3

// let array = [ 6,9,68,24,5]
// let maior = 0
// let menor = 100

// function desc (array){
//     for (i = 0; i < array.length; i++){
//         if(array[i] > maior){       
//             maior = array[i] 
//     }
//         if(array[i] < menor){
//             menor = array[i] 
//      }
//  }
// }

// desc (array)
// alert (maior)
// alert (menor)

// Exercicio 1 23/05

// Crie uma função anônima para gerar uma mensagem de convite de casamento, quedeve receber 
// nomeConvidado, data, horário, local e nomeNoivos e a partir disso monte uma mensagem convidando a pessoa para 
// o casamento. Realize pelo menos 3 chamadas para ela e valide se o retorno foi o esperado.

// let mensagem = function (nomeConvidado,data,horario,local,nomeNoivos){
//     alert ("Olá, " + nomeConvidado + "!\nVocê está sendo convidado para o casamento de " + nomeNoivos + "\nNo dia " + data + "\nNo horário " + horario + "\nNo local " + local )
// }

// let nome = prompt ("Qual o nome do convidado?")

// mensagem (nome, "29/05", "12h", "Rio do Cedro", "Fernanda e Gabriel")
// mensagem (nome, "29/05", "12h", "Rio do Cedro", "Fernanda e Gabriel")
// mensagem (nome, "29/05", "12h", "Rio do Cedro", "Fernanda e Gabriel")

// Exercicio 2  23/05

// Crie um Array numérico com 10 elementos e a partir dele utilize o 
// método everypara verificar se todos são ímpares.

// let array = [1,3,5,7,9]

// let verificarImpares = array.every (function (valorAtual){
//     return valorAtual % 2 !=0

// })

// console.log (verificarImpares)

// Exercicio 3  23/05

//Crie um Array numérico com 10 elementos e utilize o método map para a partir delecriar um novo Array 
//onde os novos elementos devem ser os antigos ao quadrado.

// let array = [3,7,18,19,34,50,67,88,94,100]

// let elementos = array.map ((elementosAtual) => elementosAtual *2)

// console.log(elementos)

//Exercicio 4 23/05

// Crie um programa que recebe 10 números de inscrição para um campeonato. A partir desses números, 
// utilizando o método filter, crie um Array para os jogadores do time de números
// pares e um outro para os jogadores do time de números ímpares. 
// Ao final exiba na tela se os times estão com a mesma quantidade de jogadores.

// let array = [1,2,3,4,5,6,7,8,9,10]
// let impar = []
// let par = []

// impar = array.filter((imparAtual) => imparAtual %2 != 0)
// console.log (impar)

// par = array.filter((parAtual) => parAtual %2 == 0)
// console.log (par)

// if (impar.length == par.length){
//     console.log ("Os times estão com o mesmo número de jogadores!")
// }else{
//     console.log ("Os times NÃO estão com o mesmo número de jogadores!")
// }

//Exercicio 5 23/05

// Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, 
// use ométodo every para verificar se todos os usuários são maiores de idade.

// let arrayIdade = []

// for (i = 0; i < 5; i++){
//     let idade = Number (prompt("Digite a sua idade:"))
//     arrayIdade.push(idade)
// }
// let verificarIdade  = arrayIdade.every((valorAtual) => valorAtual >= 18)

// alert (verificarIdade

// Exercicio 6 23/05

//Crie um array de preços e use o método 
//filter para criar um novo array que contenha apenas os preços inferioriores a R$ 50

// let precos = [60,49,70,80,10,70,300,38,12]

// let maiorQue50 = precos.filter((numeroAtual) => numeroAtual < 50)
// console.log (maiorQue50)

// Extra 1

// Extra 1: Crie um laço de repetição para solicitar 5 números, 
// armazene-os em um arraye use o método reduce para encontrar e mostrar o maior valor no array.

let numeros = []

for (i = 0; i < 5; i++){
    let num = Number (prompt("Digite um número:"))
    numeros.push(num)
}








