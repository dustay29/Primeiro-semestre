// Criar uma proprieda de array
let lista_protagonista = []
let cache = localStorage.getItem("lista_protagonista")
if(cache){
    lista_protagonista = JSON.parse(cache)
    atualizar_div_protagonista() // Atualiza a DIV com os dados
}
// classe protagonista
class protagonista{
    constructor(foto,personagem,autor,filme,habilidades,descricao){
        this.foto = foto;
        this.personagem = personagem;
        this.autor = autor;
        this.filme = filme;
        this.habilidades = habilidades;
        this.descricao = descricao;
        this.id;
    }
    // protagonista na lista
    adicionar(){
        lista_protagonista.push(this)
        this.id = lista_protagonista.length
    }
}
// Criar um protagonista e adicionar a lista
function adicionar_protagonista(foto,personagem,autor,filme,habilidades,descricao){
    let ad = new protagonista(foto,personagem,autor,filme,habilidades,descricao)
    ad.adicionar()
    atualizar_div_protagonista()
}
function remover_personagem(id){
    for(let numero=0;numero<lista_protagonista.length;numero++){
        if(lista_protagonista[numero].id == id){
            lista_protagonista.splice(numero,1)
            break;
        }
    }
    localStorage.setItem("lista_protagonista",JSON.stringify(lista_protagonista))
    atualizar_div_protagonista()
}
// formulário novo protagonista
function cadastrar_protagonista(event){
    event.preventDefault()
    let foto = document.getElementById("foto").value
    let personagem = document.getElementById("personagem").value
    let autor = document.getElementById("autor").value
    let filme = document.getElementById("filme").value
    let habilidades = document.getElementById("habilidades").value
    let descricao = document.getElementById("descricao").value
    console.log(foto,personagem,autor,filme,habilidades,descricao)
    // Adiciona um protagonista
    adicionar_protagonista(foto,personagem,autor,filme,habilidades,descricao)
}
// Função para atualizar a DIV com a lista de protagonista
function atualizar_div_protagonista(){
    let div = document.querySelector("#listaprotagonista")
    if(lista_protagonista){
        // Salva a lista no localStorage
        localStorage.setItem("lista_protagonista",JSON.stringify(lista_protagonista))
        // Cria o HTML para cada protagonista na lista
        let coisas =""
        for(let j=0;j<lista_protagonista.length;j++){
            let i=lista_protagonista[j]
            coisas+= `<div class="protagonista">
                            <img class="imgprotagonista" src="${i.foto}">
                            <p class="tituloprotagonista"><b>${i.personagem}</b></p>
                            <p class="textoprotagonista">Ator/Atriz: ${i.autor}</p>
                            <p class="textoprotagonista">Filme: ${i.filme}</p>
                            <p class="textoprotagonista">Habilidades: ${i.habilidades}</p>
                            <p class="textoprotagonista">Descrição: ${i.descricao}</p>
                            <button class ="bbb" onclick="remover_personagem(${i.id})">Excluir</button>
                        </div>`
        }
        div.innerHTML = coisas
    }
}

//Função para excluir a lista de protagonistas
function excluir(){
    lista_protagonista = [];
    localStorage.removeItem("lista_protagonista");
    atualizar_div_protagonista();
}
// Atualiza a DIV quando a página é carregada
window.onload = atualizar_div_protagonista;

// Mostra ou esconde o formulário de cadastro
function cadastro(){
    let cadastro = document.querySelector("#divcadastro")
    cadastro.classList.toggle("oculto")
}