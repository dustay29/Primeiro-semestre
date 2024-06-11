
function enviarFormulario(even){
    even.preventDefault()
    let form = document.getElementById("form")
    let formdata = new FormData(form)
    let valorNome = formdata.get('nome')
    let valorAltura = Number (formdata.get('altura'))
    let valorPeso = Number (formdata.get('peso'))
    let valorProfissao = formdata.get('profissao')
    let p = document.getElementById ('response')
    console.log (valorAltura)
    console.log (valorPeso)
    let imc = valorPeso/(valorAltura*valorAltura)
    let coisas = ""
    let opt = ["MAGREZA","NORMAL","SOBREPESO","OBESIDADE","OBESIDADE GRAVE"]
    if (imc <18.5){
        coisas=opt[0]
    }else if(imc >=18.5 && imc < 25){
        coisas=opt[1]
    }else if(imc >=25 && imc < 30){
        coisas=opt[2]
    }else if(imc >=30 && imc < 40){
        coisas=opt[3]
    }else{
        coisas=opt [4]
    }
    p.innerHTML = (`<p>Nome: ${valorNome}\nProfissão: ${valorProfissao}<p>Resultado: ${imc} , ${coisas}`)
}
