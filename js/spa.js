import conteudoIndex from "./conteudoIndex.js";
import conteudoSaude from "./conteudoSaude.js";
import conteudoEstudo from "./conteudoEstudo.js";
import conteudoHobby from "./conteudoHobby.js";
import conteudoOutros from "./conteudoOutros.js";
import conteudoTarefa from "./conteudoTarefa.js";


const containerGeral = document.querySelector('#aplicacao');

function telaPrincipal(){
    conteudoIndex();
}

function telaSaude(){
    conteudoSaude();
}

function telaEstudo(){
    conteudoEstudo();
}

function telaHobby(){
    conteudoHobby();
}

function telaOutros(){
    conteudoOutros();
}

function telaTarefa(){
    conteudoTarefa();
}

telaPrincipal();

window.addEventListener('hashchange', () => {
    containerGeral.innerHTML = "";

    const hash = window.location.hash;
    if (hash === "#saude"){
        telaSaude();
    } else if (hash === "#estudo"){
        telaEstudo();
    } else if (hash === "#hobby"){
        telaHobby();
    } else if (hash === "#outros"){
        telaOutros();
    } else if (hash === "#tarefa"){
        telaTarefa();
    } else if (hash === "#index"){
        telaPrincipal();
    }
})
