alert("Boas Vindas ao jogo do número secreto");

var numeroMaximo = 10;
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
var tentativas = 3;
var contador = 0;
var nome =prompt('Digite seu nome para iniciarmos')

while (contador < tentativas) {
  var chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}\n`);
  contador++;

  alert(chute + " foi seu chute!\n" + "Será que você acertou?");

  if (chute == numeroSecreto) {
    alert(
      "PARABÉNS!!!\n" +
        nome +
        " você conseguiu acertar o número secreto.\n"
    );
    break; // Encerra o loop se o chute for correto
  } else if (contador >= tentativas) {
    alert(
      "AH NÃO... Você não conseguiu acertar o número secreto\n" +
        "Mas tenho certeza que na próxima você conseguirá, confio em você!!!"
    );
  } else if (chute > numeroSecreto) {
    alert("Você errou...\n" + "o número secreto é menor que esse...");
  } else if (chute < numeroSecreto) {
    alert("Você errou...\n" + "o número secreto é maior que esse...");
  }

  if (contador == 1) {
    alert("Você ainda tem duas chances");
  } else if (contador == 2) {
    alert(
      "Caramba... Você só tem mais uma tentativa... Vamos lá, confio em você!!"
    );
  }
}

function exibirImagem() {
  // Torna a imagem visível
  document.querySelector('.container__imagem-robo').style.display = 'block';
}