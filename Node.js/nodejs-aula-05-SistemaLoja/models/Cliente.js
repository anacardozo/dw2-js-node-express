//É no Model que criaremos a estrutura da tabela no banco de dados

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//Definindo a estrutura da tabela
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false, //não permite nulo
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Sicronizando a tabela com o banco de dados (criando de fato o banco de dados)
Cliente.sync({force: false}) // não força a criação da tabela, porque se não pode criar outra por cima e perder os dados

export default Cliente;