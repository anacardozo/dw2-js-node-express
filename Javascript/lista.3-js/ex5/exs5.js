class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "O herói está correndo";
  }
  andar() {
    return "O herói está andando";
  }
  atacar() {
    return "O herói está atacando";
  }
  defender() {
    return "O herói está se defendendo";
  }
}

const HomemAranha = new Heroi("Homem-Aranha", 100, 250, 500);
HomemAranha.teia = 1;

HomemAranha.soltaTeia = () => {
  if (HomemAranha.teia == 1) {
    return "O Homem-Aranha pode soltar teia";
  } else {
    return "O Homem-Aranha Não pode soltar teia";
  }
};

HomemAranha.sentidoAranha = () => {
  return "O HOMEM-ARANHA DETECTOU PERIGO!!!!";
};

const Superman = new Heroi("Superman", 300, 100, 1000);
Superman.voar = 1;
Superman.podeVoar = () => {
  if (Superman.voar == 1) {
    return "O Superman pode voar";
  } else {
    return "O Superman Não pode voar";
  }
};

Superman.visaoCalor = () => {
  return "O SUPERMAN ESTÁ USANDO SUA VISÃO DE CALOR!!!!";
};

const Batman = new Heroi("Batman", 50, 50, 20);
Batman.esconder = 0;
Batman.podeEsconder = () => {
  if (Batman.esconder == 1) {
    return "O Batman pode se esconder";
  } else {
    return "O Batman Não pode se esconder";
  }
};

Batman.investigar = () => {
  return "O BATMAN ESTÁ INVESTIGANDO UM CRIME!!!!";
};

document.write(
  `<p>O super-herói ${HomemAranha.nome} possui ${
    HomemAranha.vida
  } de vida, também possui a velocidade de ${
    HomemAranha.velocidade
  }. A sua força é de ${
    HomemAranha.forca
  } e ${HomemAranha.soltaTeia()} e ${HomemAranha.sentidoAranha()}</p><br>`
);

document.write(
  `<p>O super-herói ${Superman.nome} possui ${
    Superman.vida
  } de vida, também possui a velocidade de ${
    Superman.velocidade
  }. A sua força é de ${
    Superman.forca
  } e ${Superman.podeVoar()} e ${Superman.visaoCalor()}</p><br>`
);

document.write(
  `<p>O super-herói ${Batman.nome} possui ${
    Batman.vida
  } de vida, também possui a velocidade de ${
    Batman.velocidade
  }. A sua força é de ${
    Batman.forca
  } e ${Batman.podeEsconder()} e ${Batman.investigar()}</p><br>`
);