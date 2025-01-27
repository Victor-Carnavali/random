let nomeAmigo = document.getElementById("nome-amigo").value;
let lista = document.getElementById("lista-amigos");
let listaArrayAmigos = [];

function adicionar() {
    nomeAmigo = document.getElementById("nome-amigo").value;
    lista = document.getElementById("lista-amigos");

    // /[\d]/ -> verifica se ha qualquer digito numerico (\d) no string.
    // .test(nomeAmigo) -> retorna 'true' se houver numeros na string, e 'false' caso contrario.
    if(!isNaN(nomeAmigo) || nomeAmigo.trim() == "" || /[\d]/.test(nomeAmigo)) {
        alert("insira um nome válido");
    } else if(listaArrayAmigos.includes(nomeAmigo)) {
        alert("Nome ja adicionado");
        return;
    } else {
        listaArrayAmigos.push(nomeAmigo);
        if(lista.textContent == "") {
            lista.textContent = nomeAmigo;
        } else {
            lista.textContent += ", " + nomeAmigo;
        }
    }
    
}

function sortear() {
    embaralha(listaArrayAmigos);
    let listaSorteio = document.getElementById("lista-sorteio");

    if(listaArrayAmigos.length < 4) {
        alert("insira pelo menos 4 amigos");
        return;
    }

    for(let i = 0; i < listaArrayAmigos.length; i++) {

        if(i == listaArrayAmigos.length - 1) {
            listaSorteio.innerHTML += listaArrayAmigos[i] + " -> " + listaArrayAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += listaArrayAmigos[i] + " -> " + listaArrayAmigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaArrayAmigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    nomeAmigo.innerHTML = "";
}