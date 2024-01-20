// Desafio 1

let msg = "Boas vindas ao meu site!";
console.log(msg);

// Fim do desafio 1

//Desafio 2

let nome = "Gabriel Aranda";
console.log(`Olá ${nome}!`);

// Fim do desafio 2

// Desafio 3

var name = "Gabriel Aranda";
alert(`Olá, ${nome}`);

// Fim do desafio 3

// Desafio 4

let linguagem = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

// Fim do desafio 5

// Desafio 6

let valor1 = 40;
let valor2 = 20;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Fim do desafio 6

// Desafio 7

let idade = prompt ('Quantos anos você tem?');

if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Fim do desafio 7

// Desafio 8

let numero = prompt('Digite um número:');

if (numero < 0) {
    alert('O número é negativo');
} else if(numero > 0){
    alert('O número é positivo');
} else {
    alert('O número é zero');
}

// Fim do desafio 8

// Desafio 9

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

// Fim do desafio 9

// Desafio 10

let nota = parseInt(Math.random () * 10) + 1;

if(nota >= 7){
    console.log(`Aprovado com a ${nota}`);
}else {
    console.log(`Reprovado com a ${nota}`);
}

// Fim do desafio 10

// Desafio 11

let numAleatorio = parseInt(Math.random());
console.log(numAleatorio);

// Fim do desafio 11

// Desafio 12

let numRandom = parseInt(Math.random() * 10 ) + 1;
console.log(numRandom);

// Fim do desafio 12

// Desafio 13

let random = parseInt(Math.random() * 1000) + 1;
console.log(random);

