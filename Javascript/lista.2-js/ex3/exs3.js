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

const HomemAranha = new Heroi("Homem-Aranha", 100, 250, 10);
console.log(HomemAranha.teia === 1 ? "Pode soltar teia" : "Não pode soltar teia");

HomemAranha.sentidoAranha = () => {
  return "Detectou Perigo";
};

const Superman = new Heroi("Superman", 300, 100, 1000);
console.log(Superman.podeVoar === 1 ? "Pode voar" : "Não pode voar");

Superman.visaoCalor = () => {
  return "Usando sua visão de Calor";
};

const Batman = new Heroi("Batman", 50, 50, 20);
console.log(Batman.esconder === 1 ? "Está escondido" : "Não está escondido");

Batman.investigar = () => {
  return "Investigando um Crime";
};

document.write(`<p>O super-herói ${heroi.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa o turbo ${carroEsportivo.turbo()}</p>`)