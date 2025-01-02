function clique(){

    let nome = prompt(`Qual o seu nome?`)
    let nota1 = Number (prompt(`Qual foi a primeira nota de `+ nome+ `?`))
    let nota2 = Number (prompt (`Além do `+ nota1+ `, qual foi a sua segunda nota?`))
    let soma = nota1 + nota2
    let media = soma/2

    let mensagem
    if (media => 6){
        mensagem = `Meus parabéns , você passou!`
    }else
    {
        mensagem = `Poxa, você está reprovado!`
    }

let pagina = document.getElementById('Resultado')
pagina.innerHTML = `<p>Calculando média de ${nome}</p>`
pagina.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
pagina.innerHTML += `<p>A média final foi ${media}</p>`
pagina.innerHTML += `<p>A mensagem que temos é: ${mensagem}</p>`
}