let finalizar;

let voto;
let candidato_X = 0,
  candidato_Y = 0,
  candidato_Z = 0,
  branco = 0,
  nulo = 0;

do {
  voto = parseInt(
    prompt(`Digite o número do seu candidato. 
  candidato_X => 889
  candidato_Y => 847
  candidato_Z => 515
  Para votar em branco digite => 0`)
  );
  switch (voto) {
    case 889:
      candidato_X++;
      alert(`Você votou com sucesso no candidato_X.`);
      break;
    case 847:
      candidato_Y++;
      alert(`Você votou com sucesso no candidato_Y.`);
      break;
    case 515:
      candidato_Z++;
      alert(`Você votou com sucesso no candidato_Z.`);
      break;
    case 0:
      branco++;
      alert(`Você votou com sucesso na opção "BRANCO"`);
      break;
  }

  if (isNaN(voto)) {
    alert(`O voto não pode receber letras, apenas números. Vote novamente.`);
    voto = parseInt(
      prompt(`Digite o número do seu candidato. 
    candidato_X => 889
    candidato_Y => 847
    candidato_Z => 515
    Para votar em branco digite => 0`)
    );
    switch (voto) {
      case 889:
        candidato_X++;
        alert(`Você votou com sucesso no candidato_X.`);
        break;
      case 847:
        candidato_Y++;
        alert(`Você votou com sucesso no candidato_Y.`);
        break;
      case 515:
        candidato_Z++;
        alert(`Você votou com sucesso no candidato_Z.`);
        break;
      case 0:
        branco++;
        alert(`Você votou com sucesso na opção "BRANCO"`);
        break;
    }
  }

  if (voto !== 889 && voto !== 847 && voto !== 515 && voto !== 0) {
    let confirmar = parseInt(
      prompt(`Você digitou um número inválido e o voto será anulado.
    Deseja confirmar seu voto como nulo?
    1- Sim
    2- Não`)
    );
    if (confirmar === 1) {
      nulo++;
    }
  }
  finalizar = parseInt(
    prompt(`Parabéns, você votou com sucesso.
  Deseja finalizar a votação?
  1- Sim 
  2- Não`)
  );
} while (finalizar !== 1);

if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
  alert(`O vencedor da eleição foi o candidato_X!!`);
} else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
  alert(`O vencedor da eleição foi o candidato_Y!!`);
} else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
  alert(`O vencedor da eleição foi o candidato_Z`);
} else {
  alert(`O resultado da eleição foi empate.`)
}

alert(`Finalizando votação, o placar da votação foi:
Candidato_X recebeu ${candidato_X} votos.
Candidato_Y recebeu ${candidato_Y} votos.
Candidato_Z recebeu ${candidato_Z} votos.
A quantidade de votos brancos foi ${branco} votos.
A quantidade de votos nulos foi ${nulo} votos.`);
