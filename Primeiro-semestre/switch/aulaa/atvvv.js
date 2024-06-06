//Importar buttons e inputs
let inputIdade = document.querySelector("#id_idade")
let inputNome = document.querySelector("#id_Nome")
let button = document.querySelector("button")

//Acionar um alerta quando o botão for clicado
button.onclick = () => {
    if (inputIdade.value >=18){
        alert ("Parabéns, sua carteira de motorista está pronta!")
    }else{
        alert("Nada de carro para você agora!")
    }
}