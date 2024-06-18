let contador = localStorage.getItem ('contador')

if (contador){
    contador = JSON.parse(contador) + 1
    localStorage.setItem ("contador", contador)

}else{
    localStorage.setItem("contador", "1")

}
const mensagem = document.querySelector ("#mensagem");
const pop = `Número de visitas: ${contador}`;
mensagem.textContent = pop;

