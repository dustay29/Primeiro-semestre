let nomep = (prompt("Qual o nome do país? "))
let renda = Number (prompt(" Qual é a nota de renda? "))
let educacao = Number (prompt(" Qual é a nota de educação? "))
let saude = Number (prompt(" Qual é a nota de saude? "))
let media = (renda + educacao + saude) /3
let idh = media * 0.1
idh = idh.toFixed(3) //3 casas após a virgula
let nivel
// Baixo desenvolvimento -> 0 a 0,555
// Médio desenvolvimento -> 0,556 a 0,699
// Alto desenvolvimento -> 0,700 a 0,799
// Muito alto desenvolvimento -> 0,800 a 1
switch(true){
case idh >= 0 && idh <= 0.555:
    nivel = "baixo"
    break
case idh >= 0.556 && idh <= 0.699:
    nivel = "médio"
    break
case idh >= 0.700 && idh <= 0.799:
    nivel = "alto"
    break
case idh >= 0.800 && idh <= 1:
    nivel = "muito alto"
    break
default:
    alert ("Indisponivel")

}
if(nivel == "Indisponivel"){
    alert ("Notas invalídas")
}else{
    alert (nomep + " é um país com IDH " + nivel)
}