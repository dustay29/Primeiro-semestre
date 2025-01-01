 // Alerta

 alert ("Hello World")

// // Tipos de Dados
// var
// let
// const

 let nome = "Dillan" //String
 let idadee = 17 // Number
 let logado = true // Boolean
 let lista = ["Santos", "Flamengo", "Corinthians"] //Array
 let NomeCompleto = {nome: "Dillan", idade: 17} //object

let Nome = "Porshe"
console.log (Nome)  

let valor = 19.99
console.log (valor)

let cidade = "São Paulo"
console.log (cidade)

// + = Adição
// - = Subtração
// * = Multiplicação
// / = Divisão
// % = Porcentagem

// Strings

let nomeo = "Dillan"
let sobrenome = "Silva"

let nomeCompleto = (nomeo + ' ' + sobrenome)

console.log ("Nome: " + nomeCompleto)

// Condicionais

let idade = 17

if (idade>=18) {
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

// == (igualdade abstrata): compara apenas os valores e faz conversão de tipo.
// === (igualdade estrita): compara valores e tipos, sem realizar conversão de tipo.

// && (E lógico): Retorna true se todas as condições forem verdadeiras. Caso contrário, retorna false.

// Exemplo: true && true → true, true && false → false

// || (OU lógico): Retorna true se pelo menos uma condição for verdadeira. Caso contrário, retorna false.

// Exemplo: true || false → true, false || false → false

let dia = 2;  // Representa terça-feira

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}








