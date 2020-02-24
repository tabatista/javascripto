let pacientes = document.querySelectorAll('.paciente');

let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function (event) {
    let alvoEvento = event.target;
    let paiAlvo = alvoEvento.parentNode; //delegacao de evento - event bubbling

    //esmaecer a linha
    paiAlvo.classList.add('fadeOut');

    //para esperar a funcao acima funcionar
    setTimeout(() => {
        
        //ao  inves de excluir o alvo apenas (td) ele exclui o pai consigo (tr);
        paiAlvo.remove();
    }, 700); //milisegundos para executar


});