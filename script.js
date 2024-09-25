// Selecionando pelo ID do título
const title = document.getElementById("titulo");
const BtMudarFrases = document.getElementById("mudarFrases");
// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

const BtReload = document.getElementById("btreload");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

BtReload.addEventListener("click", () => {
    location.reload();
})

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

BtMudarFrases.addEventListener("click", () => {
    var num = 1;
    document.querySelectorAll(".mensagem2").forEach(msg => {
        msg.innerText = "mensagem " +num + " foi alterada!";
        num++;
    });
})


