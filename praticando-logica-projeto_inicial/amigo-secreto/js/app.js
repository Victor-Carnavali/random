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
    } else {
        listaArrayAmigos.push(nomeAmigo);
        if(lista.textContent == "") {
            lista.textContent = nomeAmigo;
        } else {
            lista.textContent += ", " + nomeAmigo;
        }
    }
    nomeAmigo = "";
}

function sortear() {

}
