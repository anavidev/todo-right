export default () => {

    const templateIndex = `
    <img src="img/logo.png" class="img-fluid" alt="Logo 'ToDoRight'" title="Logo 'ToDoRight'">
    <p class="h5 mb-4">Clique em um botão para adicionar ou ver uma tarefa.</p>
    <div class="container-fluid" id="areaBtn">
        <div class="btn container-fluid bg-secondary rounded-5 m-2 pt-4" id="btnSaude">
            <a href="#saude">
                <i class="bi-heart-pulse fs-1"></i>
                <p class="fs-2 fw-bold">Saúde</p>
            </a>    
        </div>
        <div class="btn container-fluid bg-secondary rounded-5 m-2 pt-4" id="btnEstudo">
            <a href="#estudo">
                <i class="bi-book fs-1"></i>
                <p class="fs-2 fw-bold">Estudo</p>
            </a>    
        </div>
        <div class="btn container-fluid bg-secondary rounded-5 m-2 pt-4" id="btnHobby">
            <a href="#hobby">
                <i class="bi-emoji-smile fs-1"></i>
                <p class="fs-2 fw-bold">Hobby</p>
            </a>    
        </div>
        <div class="btn container-fluid bg-secondary rounded-5 m-2 pt-4" id="btnOutros">
            <a href="#outros">
                <i class="bi-plus-lg fs-1"></i>
                <p class="fs-2 fw-bold">Outros</p>
            </a>    
        </div>
    </div>`;

    const containerGeralIndex = document.querySelector('#aplicacao');
    containerGeralIndex.innerHTML = templateIndex;

    return containerGeralIndex;
}