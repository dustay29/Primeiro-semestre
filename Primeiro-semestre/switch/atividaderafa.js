// let n = Math.ceil(Math.random()*100)

// console.log (n);

//8.3

let a = []

for (let i = 0;i < 25;i++){
    a.push (Math.ceil(Math.random()*100))
}
let n1,n2
while (true) {
    n1 = Number (prompt("Escreva um número de 0 a 24: "))
    n2 = Number (prompt("Escreva outro número de 0 a 24: "))
    if (n1 < 25 && n1 >= 0){
        if (n2 < 25 && n2 >= 0){
            break
        }
    }
}
let divVetor = document.getElementById("divVetor")
divVetor.innerHTML += `<p>${a}</p>`
divVetor.innerHTML += `<p>A soma dos números de ${n1} e ${n2} é igual a ${a[n1]+a[n2]}<p>`

//8.4

function find (a,b){
    let c = false
    for(let i = 0;i < a.length;i++){
        if (a[i] == b){
            c = true
            break
        }
    }
    return c
}
n1 = Number(prompt("Solicite um número pra checagem: "))
if (find (a,n1)){
    divVetor.innerHTML += `<p>${n1} está na lista! <p>`
}else{
    divVetor.innerHTML += `<p>${n1} não está na lista! <p>`
}
