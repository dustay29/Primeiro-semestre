//8.5

// return Math.floor(Math.random() * (max - min + 1) ) + min; (NÃO É DO CODE)

// let num = []
// let max = 100
// let min = -100

// let saida = document.getElementById("divSaida")

// for(let i=0; i<50;i++){
//     let n = Math.floor(Math.random() * (max - min + 1) ) + min;
//     num.push(n)
// }
// console.log(num);

// for(let i=0;i<num.length;i++){
//      saida.innerHTML += num[i] + ','
// }

//  for(i= 0;i<num.length;i++){
//      if(num[i]< 0){
//      num [i] = 0
//     //  saida.innerHTML += num + ','
//  }
// }

// for(i=0;i< 50 ;i++){
//     saida.innerHTML + num[i] + " , "
// }

//8.6
// let num = []
// let div = document.getElementById("divSaida")
// for (let i = 0; i<50;i++){
//     let n = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;
//     n = (n>0) ? n : 0
//     num.push (n)
//     div.innerHTML += n+ ", "
// }

// 8.7

// let pai, mae
// let filho = []
// let div = document.getElementById("divSaida")
//     function sla(){
//         let num = []
//         for (let i = 0; i<20;i++){
//         let a = Math.ceil(Math.random()* 100 )
//         num.push(a)
//         }
//         return num
//     }
//     pai = sla()
//     mae = sla()
//     for (let i = 0;i < 26;i++){
//         let a = (i%2==0) ? pai [i] : mae [i]
//         filho [i] = a 
//     }
//     div.innerHTML += " pai: " + pai + "<br>"
//     div.innerHTML += " mãe: " + mae + "<br>"
//     div.innerHTML += " filho: " + filho + "<br>"

let num = []
let max = 35
let min = 12

let div = document.getElementById("divSaida")

for (i=0;i<30;i++){
    let c = Math.floor(Math.random() * (max - min + 1) ) + min;
    num.push(c)
}
div.innerHTML += num + "<br>"

for (i=0;i<30;i++){
    let f = Math.floor(Math.random() * (max - min + 1) ) + min;
    num.push(f)
}
div.innerHTML += num
