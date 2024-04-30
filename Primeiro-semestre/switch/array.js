// let idades = [23,22,24,55,17];

// let i = 0
// console.log(idades[i])
// i++
// console.log(idades[i])
// i++
// console.log(idades[i])
// i--
// console.log(idades[i])
// i--
// let idades = [23,22,24,55,17];

// for (i = 0;i < 10;i++){
//     if (idades[i] > 20){
//     console.log(idades[i]);
//     }
// }

// let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
// let num1 = Number (prompt("Digite um mês:"))
// alert (meses[num1-1]) //Colocar -1 pois começa com 0

// let semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
// semana.push("Feriado")
// console.log("Acrescentando elemento:");
// console.log(semana);
// let num1 = Number (prompt("Digite um número para falar a ordem do dia da semana:"))
// alert (semana[num1-1]) 

// let num = [2,4,6,8,10,12,14,16,18,20]
// num[2] = 12 //substituição

// let frutas = ["banana", "maçã", "uva"]
// frutas.splice (2)
// frutas.push ("Morango")

// let nomes = ["Charlie", "Brown", "Junior", "Chorão", "Alexandre", "Magno"]
// let idades = [50,50,50,50,50,50]
// console.log(idades [0] + idades [1]);

// let i = [25, 30, 28, 22, 26, 24]
// let media = 0
// let cont = 0

// for (cont = 0; cont < 6; cont++){
// media += i [cont]

// }
// media /= cont
// console.log (media)

let compras = ['Maçãs', 'Pão', 'Leite', 'Ovos', 'Arroz']
compras.splice (3)
console.log(compras.includes("Pão"))