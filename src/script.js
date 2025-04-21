idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("Você  NÃO pode jogar jokenpo");
}
if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-pedra, 2-papel ou 3-tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  //jogador pedra, Computador pedra --> empate!!!
  //jogador Tesoura, Computador Tesoura --> empate!
  //jogador Papel, Computador papel --> Empate
}

if (escolhaJogador == escolhaComputador) {
  alert("empate!!")
}

//jogador pedra, Computador Tesoura --> jogador vence
//jogador pedra, Computador pedra --> jogador vence
if (escolhaJogador == 1) {
  if (escolhaComputador == 2) {
    //jogador pedra, Computador pedra --> jogador vence
    alert("Computador venceu, escolha papel");
  }
  if (escolhaComputador == 3) {
    //jogador pedra, Computador Tesoura --> jogador vence
    alert("Jogador vence, computador tesoura");
  }
}
if (escolhaJogador == 2) {
  if (escolhaComputador == 1) {
    //jogador Papel, Computador pedra --> jogador vence
    alert("Jogador Papel, Computador pedra!!");
  }
}
if (escolhaJogador == 3) {
  //jogador Papel, Computador Tesoura --> Computador vence
  alert("Computador venceu, escolheu tesoura!");
}

if (escolhaJogador == 3) {
  if (escolhaComputador == 1) {
    //Jogador tesoura, computador pedra --> Computador vence
    alert("Computador vence, escolheu pedra!");
  }
  if (escolhaComputador == 2) {
    //Jogador tesoura, Computador Papel --> Jogador vence
    alert("Jogador vence, computador Papel");
  }
}

//jogador Papel, Computador pedra --> jogador vence
//jogador Papel, Computador Tesoura --> Computador vence

alert("escolhaComputador:" + escolhaComputador);
