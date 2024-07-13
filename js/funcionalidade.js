/* criar tarefas e salvar no local storage */
let listaDeTarefas = [];

export function adicionarTarefa(){ 
    if (localStorage.itemTarefa){
        listaDeTarefas = JSON.parse(localStorage.getItem('itemTarefa'));
    }

    let novaTarefa = document.querySelector('#nomeTarefa').value;
    let categoriaTarefa = document.querySelector('#categoriaTarefa').value;
    listaDeTarefas.push({categoria: categoriaTarefa, descricao: novaTarefa});
    localStorage.itemTarefa = JSON.stringify(listaDeTarefas); 

    const botaoCriar = document.querySelector('#botaoCriar');
    botaoCriar.addEventListener('click', adicionarTarefa);

    novaTarefa = document.querySelector('#nomeTarefa').value = "";
}

/* adicionar tarefas na aplicação */
export function salvarTarefaSaude(){
    let containerLista = document.querySelector('.listaTarefas');
    containerLista.innerHTML = "";

    for (let tarefa in listaDeTarefas){
        if (listaDeTarefas[tarefa].categoria === '1'){
            const listaTarefasSaude = document.querySelector('#listaTarefasSaude');
            const tarefaCriada = document.createElement('div');
            tarefaCriada.className = 'tarefas container-fluid';
            const checkCriada = document.createElement('input');
            checkCriada.type = "checkbox";
            checkCriada.className = 'checkTarefa me-2';;
            const labelCriada = document.createElement('label');
            labelCriada.innerText = listaDeTarefas[tarefa].descricao;
            const botaoExcluir = document.createElement('button');  
            const iconLixeira = document.createElement('i');
            iconLixeira.className = 'iconLixeira bi-trash-fill mx-1';

            tarefaCriada.appendChild(checkCriada);
            tarefaCriada.appendChild(labelCriada);
            botaoExcluir.appendChild(iconLixeira);
            tarefaCriada.appendChild(botaoExcluir);

            listaTarefasSaude.appendChild(tarefaCriada);
        } 
    }    

}

export function salvarTarefaEstudo(){
    let containerLista = document.querySelector('.listaTarefas');
    containerLista.innerHTML = "";

    for (let tarefa in listaDeTarefas){
        if (listaDeTarefas[tarefa].categoria === '2'){
            const listaTarefasEstudo = document.querySelector('#listaTarefasEstudo');
            const tarefaCriada = document.createElement('div');
            tarefaCriada.className = 'tarefas container-fluid';
            const checkCriada = document.createElement('input');
            checkCriada.type = "checkbox";
            checkCriada.className = 'checkTarefa me-2';;
            const labelCriada = document.createElement('label');
            labelCriada.innerText = listaDeTarefas[tarefa].descricao;
            const botaoExcluir = document.createElement('button');
            const iconLixeira = document.createElement('i');
            iconLixeira.className = 'iconLixeira bi-trash-fill mx-1';

            tarefaCriada.appendChild(checkCriada);
            tarefaCriada.appendChild(labelCriada);
            botaoExcluir.appendChild(iconLixeira);
            tarefaCriada.appendChild(botaoExcluir);

            listaTarefasEstudo.appendChild(tarefaCriada);
        } 
    }    

}

export function salvarTarefaHobby(){
    let containerLista = document.querySelector('.listaTarefas');
    containerLista.innerHTML = "";

    for (let tarefa in listaDeTarefas){
        if (listaDeTarefas[tarefa].categoria === '3'){
            const listaTarefasHobby = document.querySelector('#listaTarefasHobby');
            const tarefaCriada = document.createElement('div');
            tarefaCriada.className = 'tarefas container-fluid';
            const checkCriada = document.createElement('input');
            checkCriada.type = "checkbox";
            checkCriada.className = 'checkTarefa me-2';;
            const labelCriada = document.createElement('label');
            labelCriada.innerText = listaDeTarefas[tarefa].descricao;
            const botaoExcluir = document.createElement('button');
            const iconLixeira = document.createElement('i');
            iconLixeira.className = 'iconLixeira bi-trash-fill mx-1';

            tarefaCriada.appendChild(checkCriada);
            tarefaCriada.appendChild(labelCriada);
            botaoExcluir.appendChild(iconLixeira);
            tarefaCriada.appendChild(botaoExcluir);

            listaTarefasHobby.appendChild(tarefaCriada);
        } 
    }    

}

export function salvarTarefaOutros(){
    let containerLista = document.querySelector('.listaTarefas');
    containerLista.innerHTML = "";

    for (let tarefa in listaDeTarefas){
        if (listaDeTarefas[tarefa].categoria === '4'){
            const listaTarefasOutros = document.querySelector('#listaTarefasOutros');
            const tarefaCriada = document.createElement('div');
            tarefaCriada.className = 'tarefas container-fluid';
            const checkCriada = document.createElement('input');
            checkCriada.type = "checkbox";
            checkCriada.className = 'checkTarefa me-2';
            const labelCriada = document.createElement('label');
            labelCriada.innerText = listaDeTarefas[tarefa].descricao;
            const botaoExcluir = document.createElement('button');
            const iconLixeira = document.createElement('i');
            iconLixeira.className = 'iconLixeira bi-trash-fill mx-1';

            tarefaCriada.appendChild(checkCriada);
            tarefaCriada.appendChild(labelCriada);
            botaoExcluir.appendChild(iconLixeira);
            tarefaCriada.appendChild(botaoExcluir);

            listaTarefasOutros.appendChild(tarefaCriada);
        } 
    }    

}

