// Alterar o conteúdo da tag h1
document.querySelector(".container__texto h1").textContent = "Hora do Desafio";

// Função que exibe no console a mensagem "O botão foi clicado"
function onConsoleButtonClick() {
    console.log("O botão Console foi clicado");
}

// Adicionar um evento de clique ao botão Console
document.getElementById("console").addEventListener("click", onConsoleButtonClick);

// Função que exibe um alerta com a mensagem "Eu amo JS"
function onAlertButtonClick() {
    alert("Eu amo JS");
}

// Adicionar um evento de clique ao botão Alerta
document.getElementById("alerta").addEventListener("click", onAlertButtonClick);

// Função para lidar com o botão prompt
function onPromptButtonClick() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }
}

// Adicionar um evento de clique ao botão Prompt
document.getElementById("prompt").addEventListener("click", onPromptButtonClick);

// Função para lidar com o botão soma
function onSomaButtonClick() {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");

    // Converter os valores para números antes de somar
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        alert(`O resultado da soma é: ${resultado}`);
    } else {
        alert("Por favor, insira números válidos.");
    }
}

// Adicionar um evento de clique ao botão Soma
document.getElementById("soma").addEventListener("click", onSomaButtonClick);
