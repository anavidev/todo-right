export function conteudoTarefa() {

    const templateTarefa = `
    <img src="img/logo.png" class="img-fluid mb-2" alt="Logo 'ToDoRight'" title="Logo 'ToDoRight'">
    <div class="containerCategoria container-fluid bg-secondary rounded-5 mt-3 p-4 position-relative">
        <a href="#index">
            <i class="bi-arrow-left position-absolute top-0 start-0 ms-4 mt-3" id="botaoVoltar"></i>
        </a>    
        <h1 class="mb-5">Adicionar</h1>
        <form class="container-fluid" id="formTarefa">
            <label for="nomeTarefa">Tarefa:</label>
            <input class="form-control mb-3" type="text" id="nomeTarefa">   
            <label for="categoriaTarefa">Categoria:</label>
            <select class="form-select" id="categoriaTarefa">
                <option selected>Escolha</option>
                <option value="1">Saúde</option>
                <option value="2">Estudos</option>
                <option value="3">Hobby</option>
                <option value="4">Outros</option>
            </select>
            <button class="btn bg-primary mt-5 p-3 rounded-5" type="submit" id="botaoCriar">Criar tarefa</button>    
        </form>    
    </div>`;

    const containerGeralTarefa = document.querySelector('#aplicacao');
    containerGeralTarefa.innerHTML = templateTarefa;

    return containerGeralTarefa;

}
