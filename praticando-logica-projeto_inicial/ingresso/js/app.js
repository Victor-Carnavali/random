function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
    let qtd= parseInt(document.getElementById("qtd").value);

    if(ingresso == "pista") {
        comprarPista(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista) {
        alert("Quandidade indisponível para pista");
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;      
        alert("Compra realizada com sucesso");
    }
}
