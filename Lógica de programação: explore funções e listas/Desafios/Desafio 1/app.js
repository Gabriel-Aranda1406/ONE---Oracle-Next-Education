document.querySelector('h1').innerHTML = 'Hora do Desafio'

function consoleButton() {
    console.log('O botão foi clicado');
}

function alertButton() {
    alert('Eu amo JS');
}

function promptButton() {
    let cidade = prompt("Qual a sua cidade?");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaButton () {
    let num1 = prompt ('Digite um número:');
    let num2 = prompt ('Digite mais um número:');
    let resultado = Number(num1) + Number(num2);
    alert (`A soma entre os números é ${resultado}`);
}