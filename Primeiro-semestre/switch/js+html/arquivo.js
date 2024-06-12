function mudarCor(){
//Importar elemento HTML ou JS
const body = document.querySelector('body')
//Mudar a cor do fundo
body.style.backgroundColor = 'green'
//Mudar a cor do texto
body.style.color = 'yellow'
//Aumentar o tamanho do texto
body.style.fontSize = '30px'
//Alterar fonte do site
body.style.fontFamily = "sans-serif"
//Sublinhado
body.style.textDecoration = "underline"
//Alinhar texto
body.style.textAlign = "center"
}

function mudarFormato(){
//Importar os elementos HTML no JS

    const quadrado1 = document.querySelector("#quadrado1")
    const quadrado2 = document.querySelector("#quadrado2")
//Mudar a altura dos elementos
    quadrado1.style.height = '200px'
    quadrado2.style.height = '300px'
//Mudar cor de fundo
    quadrado1.style.backgroundColor = 'blue'
    quadrado2.style.backgroundColor = 'black'
//Mudar a largura dos elementos
    quadrado1.style.width = '200px'
    quadrado2.style.width = '300px'
//Mudar a margem dos elementos
    quadrado1.style.margin = '10px'
    quadrado2.style.margin = '10px'
//Mudar o padding
    quadrado1.style.padding = '20px'
    quadrado2.style.padding = '20px'
//Mudar a borda
    quadrado1.style.border = '5px solid purple'
    quadrado2.style.border = '5px solid purple'
//Borda arredondada
    quadrado1.style.borderRadius = '10px'
    quadrado2.style.borderRadius = '20px'
}
function esconderTexto() {
//Importar o elemento
    const divSumir = document.querySelector('#div-sumir')
    //Para ocultar o elemento da página , usar display : none
    // divSumir.style.display = 'none'
    //Fazer o elemento voltar a aparecer
    if(divSumir.style.display == 'none'){
        divSumir.style.display = 'block'
    }else{
        //Para ocultar o elemento da página, usar display none
        divSumir.style.display = 'none'
    }

}

function ativarFlex(){
    //Importar o body para manipula-lo
    const body = document.querySelector('body')
    //Ativar display flex
    body.style.display = 'flex'
    //Deixar o elemento na direção de coluna
    body.style.flexDirection = 'column'
    //Centralizar no eixo transversal da coluna (linha)
    body.style.alignItems = 'center'
    //Alinhar no eixo principal
    body.style.justifyContent = 'space-between'
}

function alterarPosition(){
    //Importar a imagem
    const imagem = document.querySelector("img")
    //Deixar a posição fixa
    imagem.style.position = 'fixed'
    //Defenir em qual local da pagina ela vai ficar
    imagem.style.top = '10px' //topo
    imagem.style.right = '10px' //direita
}

