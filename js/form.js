
let botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener('click', function (event) {
    //evita o submit do button dentro do form - que recarrega a pagina por default
    event.preventDefault();

    //acessa os inputs pela propriedade "name" deles
    let form = document.querySelector('#form-add');

    let paciente = obterPaciente(form);

    let erros = validarPaciente(paciente);
    if (erros.length > 0) {
        exibirMensagemErro(erros);
        return;
    }
    
    adicionarPacienteTabela(paciente);

    //apaga os dados do form
    form.reset();

    //limpa a ul
    document.querySelector('#mensagens-error').innerHTML = '';
});

function obterPaciente(form) {
    //criando um objeto-classe com propriedades-atributos
    let paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.altura.value, form.peso.value).toFixed(2)

    }

    return paciente;

};

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};

function montarTd(dado, classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};

function exibirMensagemErro(erros) {
    let ul = document.querySelector('#mensagens-error');

    //a innerHTML eh uma propriedade que controla o html interno de um elemento
    ul.innerHTML = ''; //limpa o conteudo - li - da ul

    //foreach
    erros.forEach(function (erro) {
        let li = document.createElement('li');
        li.classList.add('msg-error');
        li.textContent = erro;
        ul.appendChild(li);
    });


    //ul.textContent = '';
};

function validarPaciente(paciente) {
    let erros = validarDados(paciente.altura, paciente.peso);

    if (paciente.nome.length == 0)
        erros.push('Nome nao pode ser em branco');

    if (paciente.gordura.length == 0)
        erros.push('Gordura nao pode ser em branco');

    if (paciente.peso.length == 0)
        erros.push('Peso nao pode ser em branco');

    if (paciente.altura.length == 0)
        erros.push('Altura nao pode ser em branco');

    return erros;
};

function adicionarPacienteTabela(paciente) {

    //cria um novo item na lista
    let pacienteTr = montarTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}