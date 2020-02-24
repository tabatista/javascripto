//ALTERANDO O TITULO

let titulo = document.querySelector('.titulo');
console.log(titulo.textContent);
titulo.textContent = 'Aparecida Nutricionista';

//CALCULO DE IMC - ELEMENTO ISOLADO

let paulo = document.querySelector("#paulo");

let tdPeso = paulo.querySelector('.info-peso');
let peso = tdPeso.textContent;

let tdAltura = paulo.querySelector('.info-altura');
let altura = tdAltura.textContent;

let imcPaulo = peso / (altura * altura);

let tdImc = paulo.querySelector('.info-imc');
tdImc.textContent = imcPaulo;

//TABELA - ARRAY - IMC

const msgInvalida = 'Peso ou altura invalido(a)';

function calcularIMC(altura, peso) {
    return peso / (altura * altura);
};

function validarDados(altura, peso) {
    let erros = [];

    if (altura >= 3 || altura < 0)
        erros.push('Altura invalida');

    if (peso >= 1000 || peso < 0)
        erros.push('Peso invalido');

    return erros;
};

function preencherAllIMC() {
    let pacientes = document.querySelectorAll('.paciente');

    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];

        let tdPeso = paciente.querySelector('.info-peso');
        let peso = tdPeso.textContent;

        let tdAltura = paciente.querySelector('.info-altura');
        let altura = tdAltura.textContent;

        let isValido = validarDados(altura, peso);

        let imc = calcularIMC(altura, peso);
        let tdImc = paciente.querySelector('.info-imc');
        if (isValido.length == 0) {
            //limitar o numero de casas decimais  com o toFixed
            tdImc.textContent = imc.toFixed(2);
        } else {
            tdImc.textContent = msgInvalida;

            //alterando um estilo diretamente..

            //paciente.style.color = "red";
            //paciente.style.backgroundColor = "lightcoral";

            //alterando um estilo pela classe do css... estilo pacienteInvalido criado no arquivo index.css
            paciente.classList.add('pacienteInvalido'); //adicionando um estilo novo
        }

    };
};

preencherAllIMC();

//EVENTOS - LISTENER - ADD PACIENTE - ELEMENTOS 

titulo.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
    console.log('fui clicado');
};

//funcao anonima
titulo.addEventListener('click', function () {
    console.log('fui clicado anonimo');
});


//event shortcut - com o "on" na frente do nome do evento...
//ele eh um evento unico, substitui o evento anterior (do mesmo tipo), diferente do listener que faz uma fila
function testeShort() {
    console.log('Test shortcut')
};;

titulo.onmouseover = testeShort; //nao substitui o 'click' pq eh um mouseover

        //mas nao eh boa pratica utilizar esse tipo de evento, pq qualquer um pode substituir seu evento...