// let img = document.querySelector("#id_img")


// function clicar(a){
//     if (a == 1){
//         alert ("Encima")
//         let as= document.getElementById("img")
//     }else{
//         alert ("Fora")
//     }


// }

// let contador = 0

// function aumentarContador(){
//     contador++
//     const paragrafo = document.querySelector("p")
//     paragrafo.textContent = contador
// }

function enviarFormulario(evento){
    evento.preventDefault()

    const formulario = document.querySelector("form")

    const dadosForm = new FormData(formulario)

    const valorNome = dadosForm.get('nome')
    const valorIdade = dadosForm.get('email')
    const valorMensagem = dadosForm.get('mensagem')

    alert (valorNome + "\n" + valorIdade + "\n" + valorMensagem)

}