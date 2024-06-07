let d = 

function enviarFormulario(evento){
    evento.preventDefault()

    const formulario = document.querySelector("form")

    const dadosForm = new FormData(formulario)

    const valorNome = dadosForm.get('nome')
    const valorAltura = dadosForm.get('altura')
    const valorPeso = dadosForm.get('peso')
    const valorProfissao = dadosForm.get('profissao')

    let alturaDobrada = valorAltura * valorAltura
    let imc = valorPeso / alturaDobrada
    alert (valorNome + "\n" + valorAltura + "\n" + valorPeso + "\n" + valorProfissao + "\n" + imc)
    

}
