let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function (event) {
    let alvoEvento = event.target;
    let paiAlvo = alvoEvento.parentNode; //delegacao de evento - event bubbling

    //esmaecer a linha
    paiAlvo.classList.add('fadeOut');

    //para esperar a funcao acima funcionar
    setTimeout(() => { //arrow function - a function estah oculta mas ela existe
        
        //ao  inves de excluir o alvo apenas (td) ele exclui o pai consigo (tr);
        paiAlvo.remove();
    }, 600); //milisegundos para executar


});