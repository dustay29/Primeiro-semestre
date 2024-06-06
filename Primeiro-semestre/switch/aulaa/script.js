//Buscar o elemento no HTML

let imagem = document.querySelector("img")
console.log(imagem);

//Mudar a imagem

imagem.setAttribute("src", "https://i0.statig.com.br/bancodeimagens/imgalta/6d/2n/qs/6d2nqshw9lodueisju2k2bwyl.jpg")

//Importar buttons e inputs
let inputIdade = document.querySelector("#id_idade")
let inputNome = document.querySelector("#id_Nome")
let button = document.querySelector("button")

//Acionar um alerta quando o botão for clicado
button.onclick = () => {
    alert ('Idade = ' inputIdade.value "\nNome: " + inputNome.value)
    console.log(inputNome.value)
    console.log(inputIdade.value);
    console.log (button.value)
}