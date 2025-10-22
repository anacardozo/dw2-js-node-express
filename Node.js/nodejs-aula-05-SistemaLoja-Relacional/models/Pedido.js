import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

//Pedido.sync({ force: false }); -> cria de fato a tabela no banco, o force: false, é para não forçar a criação caso a tabela não existe

export default Pedido;
