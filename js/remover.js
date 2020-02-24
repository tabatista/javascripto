let pacientes = document.querySelectorAll('.paciente');

let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function (event) {
    let alvoEvento = event.target;
    let paiAlvo = alvoEvento.parentNode;
    //ao  inves de excluir o alvo apenas (td) ele exclui o pai consigo (tr);
    paiAlvo.remove();

});