// Desafio 1
function imc() {
    let peso = prompt('Qual o seu peso?');
    let altura = prompt('Qual a sua altura?');
    

    // Conversão da altura para metros
    altura = parseFloat(altura) / 100;

    let resultadoIMC = peso / (Math.pow(altura, 2));
    
    if (resultadoIMC < 18.5) {
        console.log(`Seu IMC é ${resultadoIMC}. E você está abaixo do peso`);
    } else if (resultadoIMC <= 24.9) {
        console.log(`Seu IMC é ${resultadoIMC}. E você está no peso normal`);
    } else if (resultadoIMC <= 29.9) {
        console.log(`Seu IMC é ${resultadoIMC}. E você está com excesso de peso`);
    } else {
        console.log(`Seu IMC é ${resultadoIMC}. E você está com obesidade`);
    }
}

//Fim do desafio 1

//Desafio 2

function calcularNumFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        console.log(numero * calcularNumFatorial(numero - 1));
    }
}

//Fim do desafio 2

//Desafio 3
function converterValor (){
    let valorEmDolar = prompt('Digite um valor em dólar e saiba a conversão em reais dele:');

    valorEmDolar = parseFloat(valorEmDolar);

    let valorEmReal = 4.80;
    let resultado = valorEmReal * valorEmDolar;
    return resultado + `Esse seria o valor em Reais.`
}

//Fim do desafio 3

// Desafio 4

function exibirNaTela (altura, largura){
    let resultadoPerimetro = (altura + largura) * 2;
    let resultadoArea = altura * largura;
    return `Esse seria o seu perímetro: ${resultadoPerimetro}. E essa seria sua área: ${resultadoArea}`;
}

//Fim do desafio 4

//Desafio 5

function exibirCirculo (raio){
    let pi = 3.14;
    let area = pi * (raio ** 2)
    let perimetro = 2 * pi * raio;
    return `Esse seria o seu perímetro: ${perimetro.toFixed(2)}. E essa seria sua área: ${area.toFixed(2)}`;   // o toFixed(2), faz com que o resultado tenha apenas duas casas decimais.
}

// Fim do desafio 5

//Desafio 6

function tabuada(numero) {
    let multiplicador = 1;

    if (multiplicador <= 10) {
        let resultado = numero * multiplicador;
        console.log(`Esse seria o resultado: ${resultado}`);
    }
}

// Fim do desafio 6