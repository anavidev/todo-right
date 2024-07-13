export default () => {

    const templateEstudo = `
    <img src="img/logo.png" class="img-fluid mb-2" alt="Logo 'ToDoRight'" title="Logo 'ToDoRight'">
    <div class="containerCategoria container-fluid bg-secondary rounded-5 mt-3 p-4 position-relative">
        <a href="#index">
            <i class="bi-arrow-left position-absolute top-0 start-0 ms-4 mt-3" id="botaoVoltar"></i>
        </a>    
        <i class="bi-book" id="iconCategoria"></i>
        <h1 class="mx-3">Estudos</h1>
        <div class="listaTarefas container-fluid mt-3 mb-5" id="listaTarefasEstudo">
            <div class="tarefas done container-fluid">
                <input type="checkbox" class="checkTarefa" id="checkBtn1">
                <label for="checkBtn1">Tarefa 1</label>
                <button>
                    <i class="iconLixeira bi-trash-fill mx-1"></i>
                </button>
            </div>
        </div>
        <div class="container-fluid bg-primary position-absolute bottom-0 end-0 me-3 mb-2" id="botaoAdicionar">
            <a href="#tarefa">
                <i class="bi-plus-lg"></i>
            </a>    
        </div>
    </div>`;

    const containerGeralEstudo = document.querySelector('#aplicacao');
    containerGeralEstudo.innerHTML = templateEstudo;

    return containerGeralEstudo;

}