// =========================
// SENHA
// =========================

function verificarSenha() {

    const senha =
        document.getElementById("senha").value;

    const mensagem =
        document.getElementById("mensagemSenha");


    if (senha === "29") {

        document
            .getElementById("telaSenha")
            .classList.add("escondida");


        document
            .getElementById("telaPergunta")
            .classList.remove("escondida");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        mensagem.textContent =
            "Hmm... essa não é a senha. 😏❤️";
    }
}



// =========================
// BOTÃO NÃO FOGE 😂
// =========================

function fugir() {

    const botao =
        document.getElementById("botaoNao");

    const mensagem =
        document.getElementById("mensagemNao");


    const largura =
        window.innerWidth - 150;

    const altura =
        window.innerHeight - 100;


    const novaPosicaoX =
        Math.random() * Math.max(largura, 20);

    const novaPosicaoY =
        Math.random() * Math.max(altura, 20);


    botao.style.position = "fixed";

    botao.style.left =
        novaPosicaoX + "px";

    botao.style.top =
        novaPosicaoY + "px";


    mensagem.textContent =
        "Hahaha! Você não vai conseguir clicar no NÃO! 😂❤️";
}



// =========================
// ABRIR CARTA
// =========================

function abrirCarta() {

    document
        .getElementById("telaPergunta")
        .classList.add("escondida");


    document
        .getElementById("telaCarta")
        .classList.remove("escondida");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



// =========================
// MOSTRAR BATALHA
// =========================

function mostrarBatalha() {

    document
        .getElementById("telaCarta")
        .classList.add("escondida");


    document
        .getElementById("telaBatalha")
        .classList.remove("escondida");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    iniciarBatalha();
}



// =========================
// BATALHA AUTOMÁTICA
// =========================

function iniciarBatalha() {

    const resultado =
        document.getElementById("resultadoBatalha");

    const final =
        document.getElementById("finalAmor");


    // Resultado depois da luta

    setTimeout(function() {

        resultado.classList.remove("escondido");

    }, 6000);


    // Final romântico

    setTimeout(function() {

        final.classList.remove("escondido");

        final.scrollIntoView({
            behavior: "smooth"
        });

    }, 7500);

}