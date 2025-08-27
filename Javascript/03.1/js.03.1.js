//CLASSES NO JAVASCRIPT

//Criando uma classe
//Nome de classes tem que começar com letra Maiuscula

class Carro {
  // Para criar os atributos na classe deve-se utilizar o método "constructor" - fala quais atributos essa classe vai ter
  constructor(marca, modelo, ano) {
    // this representa a instancia(objeto)
    // o valor que for enviado a classe será atribuido a instância
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando Instancias (objetos) derivadas da classe carro
//Objeto carro popular
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
  `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${
    carroPopular.ano
  }. Quando buzina faz ${carroPopular.buzinar()}</p>`
);

//Objeto carro esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(
  `<p>O carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } é do ano de ${
    carroEsportivo.ano
  }. Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

//Adicionar um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionar métodos
carroEsportivo.turbo = () => {
  return "Vrummmmmm! O carro acelera muito!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa o turbo ${carroEsportivo.turbo()}</p>`)