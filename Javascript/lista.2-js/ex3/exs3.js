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
HomemAranha.teia = 0;
HomemAranha.sentidoAranha = () => {
  return "Detectou Perigo";
};

const Superman = new Heroi("Superman", 300, 100, 1000);
Superman.voar = 0;
Superman.visaoCalor = () => {
  return "Usando sua visão de Calor";
};

const Batman = new Heroi("Batman", 50, 50, 20);
Batman.esconder = 1;

Batman.investigar = () => {
  return "Investigando um Crime";
};

document.write(`<p>O super-herói ${HomemAranha.nome} possui ${HomemAranha.vida} de vida, também possui a velocidade de ${HomemAranha.vida}. A sua força é de ${HomemAranha.forca} e ${HomemAranha.teia} e ${HomemAranha.sentidoAranha()}</p>`)