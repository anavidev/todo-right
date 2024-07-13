import conteudoIndex from "./conteudoIndex.js";
import conteudoSaude from "./conteudoSaude.js";
import conteudoEstudo from "./conteudoEstudo.js";
import conteudoHobby from "./conteudoHobby.js";
import conteudoOutros from "./conteudoOutros.js";
import {conteudoTarefa} from "./conteudoTarefa.js";
import { adicionarTarefa, salvarTarefaSaude, salvarTarefaEstudo, salvarTarefaHobby, salvarTarefaOutros } from "./funcionalidade.js";


const containerGeral = document.querySelector('#aplicacao');

function telaPrincipal(){
    conteudoIndex();
}

function telaSaude(){
    conteudoSaude();
    salvarTarefaSaude();
}

function telaEstudo(){
    conteudoEstudo();
    salvarTarefaEstudo();
}

function telaHobby(){
    conteudoHobby();
    salvarTarefaHobby();  
}

function telaOutros(){
    conteudoOutros();
    salvarTarefaOutros();
}

function telaTarefa(){
    conteudoTarefa();
    adicionarTarefa();
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
