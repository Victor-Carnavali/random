function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
        numero = sortearNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = sortearNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function sortearNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.add("container__botao-desabilitado");
        botaoReiniciar.classList.remove("container__botao");
    }
}

function reiniciar() {
    
}