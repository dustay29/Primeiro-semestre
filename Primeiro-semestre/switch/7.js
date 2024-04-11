// Exercício 7: Netflix
// Crie um programa, utilizando a estrutura escolha/caso, que sugira uma série da Netflix com base
// nas preferências do usuário. Peça ao usuário para escolher entre gêneros como "Comédia",
// "Drama" ou "Ação". Dependendo da escolha, o programa deve dar uma recomendação de série
// dentro da categoria escolhida. Por exemplo, se o usuário escolher "Comédia", o programa pode
// sugerir "Brooklyn Nine Nine“.

let nome = (prompt("Qual o seu nome? "))
let filme = Number (prompt("Escolha um gênero:\n1) Comédia\n2) Drama\n3) Ação"))
switch (filme){
    case 1:
        alert ("Como você escolheu comédia eu sugiro pra você a série Brooklyn Nine Nine ")
    break
    case 2:
        alert ("Como você escolheu drama eu sugiro pra você a série drama.com ")
    break
    case 3:
        alert ("Como você escolheu ação eu sugiro pra você a série matrix ")
    break
    default:
        alert ("Número inválido!")
}
