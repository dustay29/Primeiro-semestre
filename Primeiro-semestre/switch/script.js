function mostrarNome(evento){

    evento.preventDefault()
    const inputNome = document.querySelector("#id_nome")
    const paragrafo = document.querySelector("#mensagem")

    const mensagem = `Olá ${inputNome.value}`
    paragrafo.textContent = mensagem
    localStorage.setItem('nome', inputNome.value)

}
function buscarNome(){
    const nome = localStorage.getItem('nome')
    const paragrafo = document.querySelector("#mensagem")
    paragrafo.textContent = `Olá ${nome}`
}

buscarNome()

