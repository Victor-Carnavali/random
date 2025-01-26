function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
    let qtd= parseInt(document.getElementById("qtd").value);

    if(ingresso == "pista") {
        comprarPista(qtd);
    }

    if(ingresso == "superior") {
        comprarSuperior(qtd);
    }

    if(ingresso == "inferior") {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista) {
        alert("Quandidade indisponível para pista");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;      
        alert("Compra realizada com sucesso");
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtd > qtdSuperior) {
        alert("Quandidade indisponível para piso superior");
    } else {
        qtdSuperior -= qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;      
        alert("Compra realizada com sucesso");
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtd > qtdInferior) {
        alert("Quandidade indisponível para piso inferior");
    } else {
        qtdInferior -= qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;      
        alert("Compra realizada com sucesso");
    }
}