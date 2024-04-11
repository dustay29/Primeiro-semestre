let senha = Number(prompt("Qual a senha da sua conta bancária? "))

let saldo = 500

if (senha == "123"){
        alert ("Senha correta, acesso liberado!")

    let operacao = Number(prompt("Que operação você deseja fazer?\n1) Saque\n2) Depósito \n3) Saldo")) 
    
    switch (operacao){
        case 1:
                alert ("Bem vindo para a área de Saque.")
            let sacar = Number(prompt("Quanto você deseja sacar?\n Seu saldo é de R$" + saldo ))
            gerall = saldo - sacar
            if (saldo > sacar){
                alert ("Você sacou R$" + sacar + ", o valor do seu saldo agora é de R$" + gerall)
            }else{
                alert ("Saldo indisponível!")
            }
        break
    
        case 2:
                alert ("Bem vindo para a área de Depósito.")
            let depositar = Number(prompt("Quanto você deseja depositar?\n Seu saldo é de R$" + saldo))
            let geral = depositar + saldo
                alert ("Você depositou R$" + depositar + ", agora seu saldo está no valor de R$" + geral)
        break
    
        case 3:
            alert ("Bem vindo para a área de Saldo.\n Seu saldo é de R$" + saldo)
        break
    
        default:
            alert ("Operação inválida!")
        }

    }else{        alert ("Senha incorreta!")
}
    

