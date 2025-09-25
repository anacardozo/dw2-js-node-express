// Importando o Express (framework)
const express = require("express");
// Iniciando o express na variável app
const app = express();

//CONFIGURANDO O EJS
app.set('view engine' , 'ejs')

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a requisição / RES = Trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello Word! Bem vindo ao meu primeiro site com node.js e express!! =)</h1>"
  );
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.send("<h1>Bem-vindo a página de Produtos!</h1>");
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  res.send("<h1>Bem-vindo a página de Clientes!</h1>");
});

// Iniciando o sevidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

// port - a porta que ele vai escutar, e cria uma função para ele tratar o erro que pode acontecer durante a execução
app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
  }
});
