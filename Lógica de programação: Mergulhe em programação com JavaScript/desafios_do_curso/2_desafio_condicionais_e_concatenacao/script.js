
//Desafio 1
alert('Seja bem vindo nosso site');

let nome = prompt('Qual o seu nome?');
let dia1 = "Sábado";
let dia2 = "Domingo";

let dia = prompt('Qual dia da semana é hoje?');

if (dia == dia1 || dia == dia2){ // Esse sinal de || significa OR (ou, em português). Nessa parte, quis dizer que se a variável dia fosse igual da variável dia 1 OU (OR) igual da variável do dia2, resultaria no alerta abaixo.
    alert(`Bom fim de semana, ${nome}!`);
} else if (dia != dia1 && dia != dia2){ // Esse sinal de && significa AND (e, em português, usado para conjunção de valores. No caso acima, quis dizer que se a variável dia, fosse diferente da variável dia1 E (AND) fosse diferente da variável dia2, resultaria no alerta abaixo.
    alert(`Boa semana, ${nome}!`);
} 

// Fim do primeiro desafio



// Desafio 2

let numero = prompt('Digite um número, podendo ser negativo ou positivo');

if (numero > 0){
    alert('O número é positivo');
} else if (numero < 0) {
    alert('O número é negativo');
} else {
    alert('O número é zero');
}

// Fim do segundo desafio

// Desafio 3

let xpHeroi = 100;


if (xpHeroi >= 100){
    alert("Parabéns, você venceu!");
} else if (xpHeroi < 100) {
    alert('Tente novamente para ganhar.');
}

//Fim do terceiro desafio

// Desafio 4

let saldo = 1000;

if(saldo > 1.99) {
    alert (`Você tem ${saldo} reais na sua conta!`);
} else if(saldo < 1.99){
    alert(`Você tem ${saldo} real na sua conta`);
}

// Fim do quarto desafio

// Desafio 5

let nomeUsuario = prompt('Qual o seu nome?');

alert(`Bem-vindo(a), ${nomeUsuário}`);

// Fim do quinto desafio

