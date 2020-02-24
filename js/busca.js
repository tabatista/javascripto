let botao = document.querySelector('#buscar-pacientes');
botao.addEventListener('click', () => {
    //REQUISICAO AJAX - ASSINCRONO - nao para o fluxo do restante

    let xhr = new XMLHttpRequest();
    //REQUISICAO DO TIPO / URL
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    //fica escutando para quando o response estiver carregado
    xhr.addEventListener('load', () => {
        
        let spanErro = document.querySelector('#erro-ajax');
        //testando codigo de resposta
        if (xhr.status == 200) {
            spanErro.classList.add('invisivel');
            let response = xhr.responseText; //o texto da resposta
            let pacientes = JSON.parse(response); //converte um texto JSON em um objeto javascript (array)

            //adiciona os pacientes na tabela
            pacientes.forEach((p) => {
                adicionarPacienteTabela(p);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            spanErro.classList.remove('invisivel');
            spanErro.classList.add('msg-error');            
        }

    });

    xhr.send(); //envia a requisicao
});