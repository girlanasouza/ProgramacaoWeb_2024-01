function quemVenceu(jogadaUsuario, jogadaComputador) {
  if (
    (jogadaUsuario === 1 && jogadaComputador === 3) ||
    (jogadaUsuario === 2 && jogadaComputador === 1) ||
    (jogadaUsuario === 3 && jogadaComputador === 2)
  ) {
    return 1;
  } else if (jogadaUsuario === jogadaComputador) {
    return 0;
  } else {
    return -1;
  }
}
function traduzirJogada(jogada) {
  switch (jogada) {
    case 1:
      return "Papel";
    case 2:
      return "Pedra";
    case 3:
      return "Tesousa";
  }
}
function jogarJokenpo() {
  let pontuacao = 0;
  while (true) {
    let jogadaUsuario = parseInt(
      prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura")
    );
    console.log("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
    if (jogadaUsuario < 1 || jogadaUsuario > 3 || isNaN(jogadaUsuario)) {
      console.log("Jogada inválida. Fim de jogo!");
      break;
    }
    let jogadaComputador = Math.floor(Math.random() * 3) + 1;
    console.log("O computador jogou " + traduzirJogada(jogadaComputador));
    let resultado = quemVenceu(jogadaUsuario, jogadaComputador);
    if (resultado === 1) {
      console.log("Você ganhou!");
      pontuacao++;
    } else if (resultado === 0) {
      console.log("A rodada empatou!");
    } else {
      console.log("Você perdeu! A sua pontuação foi de " + pontuacao);
      break;
    }
  }
}
jogarJokenpo();
