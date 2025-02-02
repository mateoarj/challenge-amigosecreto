alert ('Atenção! - Clique em sortear apenas quando TODOS os nomes já tiverem sidos inseridos, pois a lista de nomes será ocultada assim que o sorteio começar e não será mais possível verificar os nomes inseridos.')
let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (!isNaN(nome) || nome === "") {
        alert ('É necessário inserir um nome válido.');
    } else {
        amigos.push(nome);
        alterarTexto('h2',`Você adicionou ${nome} a sua lista do amigo secreto.`); 
        console.log(amigos);
        limparCampo();
        atualizarLista();
    }
    if (amigos.length > 0) {
        document.getElementById('sortear').removeAttribute('disabled');
    }
}

function atualizarLista() {
    limparLista()
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        limparLista()
        let nomeAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(amigos[nomeAleatorio]);
        alterarTexto('h2', `O seu amigo secreto é: ${amigos[nomeAleatorio]}.`)
        amigos.splice(nomeAleatorio, 1);
    } else {
        document.getElementById('sortear').setAttribute('disabled', true)
        alterarTexto('h2','Não existem mais nomes possíveis para serem sorteados');
  
    }
    
}

function alterarTexto(tag, texto) {
    document.querySelector(tag).innerText = texto;
}

function limparLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}

function limparCampo() {
    nomes = document.getElementById("amigo");
    nomes.value = "";
}