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

let array = [ 6,9,68,24,5]
let maior = 0
let menor = 100

function desc (array){
    for (i = 0; i < array.length; i++){
        if(array[i] > maior){       
            maior = array[i] 
    }
        if(array[i] < menor){
            menor = array[i] 
     }
 }
}

desc (array)
alert (maior)
alert (menor)




