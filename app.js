// func de parametro

exibirTextoNaTela ('h1', 'Jogo do ns');
exibirTextoNaTela ('p', 'Escolha um ns entre 1 e 10');

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

mensagenIni();

function mensagenIni() {
    exibirTextoNaTela ('h1', 'Jogo do ns');
    exibirTextoNaTela ('p', 'Escolha um ns entre 1 e 10');
}

// func de retorno
let numerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumero();

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeNumerosSorteados = numerosSorteados.length

    if(quantidadeNumerosSorteados == limite) {
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

// func tipo booleano 

let tentativas = 1

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabens');
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTent = `vc descobriu o ns com ${tentativas} ${palavra}`;
        exibirTextoNaTela('p', mensagemTent);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', 'o numero é menor');
        } else {
            exibirTextoNaTela('h1', 'Errou!!!');
            exibirTextoNaTela('p', 'o numero é maior');
        } 
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumero();
    tentativas = 1;
    mensagenIni();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}