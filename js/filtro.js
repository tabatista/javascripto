let campoFiltro = document.querySelector('#filtro-tabela');

campoFiltro.addEventListener('input', function () {
    // console.log(this.value);
    let pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        pacientes.forEach((p) => {
            let tdNome = p.querySelector('.info-nome');
            let nome = tdNome.textContent;

            //o que eu quero que busque - como quero que busque(expressao regular)... com case insensitive
            let expressao = new RegExp(this.value, 'i');

            //meu if kk - nome.toUpperCase().indexOf(this.value.toUpperCase())
            if (!expressao.test(nome)) {
                p.classList.add('invisivel');
            } else {
                p.classList.remove('invisivel');
            }
        });
    } else {
        pacientes.forEach((p) => {
            p.classList.remove('invisivel');
        });
    }



});