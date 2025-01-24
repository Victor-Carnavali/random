function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let labelSorteados = document.getElementById("resultado");

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
        numero = sortearNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = sortearNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    labelSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
}

function sortearNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}