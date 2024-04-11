let notas = 0
let quantidade = 0
let total = 0

while (notas != -1){
    alert ("Digite -1 para sair")
    if (notas != -1){
        notas = Number (prompt ("Digite sua nota: "))
        total += notas
        quantidade++
    } else {
        alert ("Calculo finalizado")
    }
}
let media = total / quantidade
alert(media.toFixed(2))

//CORRIGIR