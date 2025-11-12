//importa o express
import express from "express";
import FilmesController from "./controllers/FilmesController.js"
import connection from "./config/sequelize-config.js";
//carrega ele em uma variavel
const app = express();

//Configurações do express
//usar ejs como front end (renderizador de paginas)
app.set("view engine", "ejs")
//definir que a pasta public é de arquivos estaticos
app.use(express.static("public"))
//captura dados de formularios
app.use(express.urlencoded({extended: false}))

//define o uso das rotas
app.use("/", FilmesController);

//conectando o banco
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch((error) => {
    console.log(error);
});
//criando o banco
connection.query("CREATE DATABASE IF NOT EXISTS filmes;").then(() => {
    console.log("O banco de dados está criado");
}).catch((error) => {
    console.log(error);
});

//cria a porta para rodar o servi
const port = 8080;

//inicia o servidor
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
