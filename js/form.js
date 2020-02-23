
let botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener('click', function (event) {
    //evita o submit do button dentro do form - que recarrega a pagina por default
    event.preventDefault();

    //acessa os inputs pela propriedade "name" deles
    let form = document.querySelector('#form-add');

    let paciente = obterPaciente(form);

    //cria um novo item na lista
    let pacienteTr = montarTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //apaga os dados do form
    form.reset();
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

    let imcTd = montarTd(paciente.imc, 'info-imc');

    if (validarDados(paciente.altura, paciente.peso)) {
        imcTd.textContent = paciente.imc;
    } else {
        imcTd.textContent = msgInvalida;
        pacienteTr.classList.add('pacienteInvalido');
    }

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
};

function montarTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};