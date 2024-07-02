let lista_protagonista = []
class protagonista{
    constructor(foto,personagem,autor,filme,habilidades,descricao){
        this.foto = foto;
        this.personagem = personagem;
        this.autor = autor;
        this.filme = filme;
        this.habilidades = habilidades;
        this.descricao = descricao;
    }
    adicionar(){
        lista_protagonista.push(this)
    }
}
function adicionar_protagonista(foto,personagem,autor,filme,habilidades,descricao){
    let ad = new protagonista(foto,personagem,autor,filme,habilidades,descricao)
    ad.adicionar()
    atualizar_div_protagonista(ad)
}
function cadastrar_protagonista(event){
    event.preventDefault()
    let foto = document.getElementById("foto").value
    let personagem = document.getElementById("personagem").value
    let autor = document.getElementById("autor").value
    let filme = document.getElementById("filme").value
    let habilidades = document.getElementById("habilidades").value
    let descricao = document.getElementById("descricao").value
    console.log(foto,personagem,autor,filme,habilidades,descricao)
    adicionar_protagonista(foto,personagem,autor,filme,habilidades,descricao)
}
function atualizar_div_protagonista(ad){
    let div = document.querySelector("#listaprotagonista")
    if(lista_protagonista.length > 0){
        localStorage.setItem("lista_protagonista",JSON.stringify(lista_protagonista))
        let coisas =""
        for(let j=0;j<lista_protagonista.length;j++){
            let i=lista_protagonista[j]
            coisas+= `<div class="protagonista">
                            <img class="imgprotagonista" src="${i.foto}">
                            <p class="tituloprotagonista">${i.personagem}</p>
                            <p class="textoprotagonista">Ator/Atriz: ${i.autor}</p>
                            <p class="textoprotagonista">Filme: ${i.filme}</p>
                            <p class="textoprotagonista">Habilidades: ${i.habilidades}</p>
                            <p class="textoprotagonista">Descrição: ${i.descricao}</p>`
        }
        div.innerHTML = coisas
    }else{
        let cache = localStorage.getItem("lista_protagonista")
        if(cache){
            lista_protagonista = JSON.parse(cache)
            atualizar_div_protagonista()
        }
    }
}
window.onload = atualizar_div_protagonista()

function cadastro(){
    let cadastro = document.querySelector("#divcadastro")
    cadastro.classList.toggle("oculto")
}