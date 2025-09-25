// Importando o Express (framework)
const express = require("express");
// Iniciando o express na variável app
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//DEFININDO A PASTA PUBLIC para ARQUIVOS Estáticos
app.use(express.static('public'));

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a requisição (está enviando uma requisição ao servidor) / RES = Trata a resposta (resposta do servidor)
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/", (req, res) => {
//   res.send(
//     "<h1>Hello Word! Bem vindo ao meu primeiro site com node.js e express!! =)</h1>"
//   );
// });

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  //const produtos = ["Computador", "Celular", "Tablet", "Notebook"];
  //Array de objetos com produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", CPF: "123.456.789-00", endereco: "Rua Diamante, 100" },
    { nome: "Isaac", CPF: "123.456.789-00", endereco: "Rua das Flores, 34" },
    { nome: "Ana Flávia", CPF: "123.456.789-00", endereco: "Rua Ceará, 34" },
    { nome: "Renan", CPF: "123.456.789-00", endereco: "Rua Curitiba, 22" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

//ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  const pedidos = [
    { num: "2112", produto: "Caderno", valor: 40 },
    { num: "3223", produto: "Estojo", valor: 20 },
    { num: "4536", produto: "Caneta", valor: 3 },
    { num: "9541", produto: "Lápis", valor: 2 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

//ROTA DE PERFIL
//:user -> é um parâmetro da rota (OBRIGATÓRIO)
//:user? -> é um parâmetro da rota (OPCIONAL)
app.get("/perfil/:user", (req, res) => {
  //parametro user
  // o que estiver depois da barra ele vai guardar dentro da variavel user
  const user = req.params.user
  res.render("perfil", {
    // Enviando variaveis para a pagina ejs (HTML)
    user: user,
    // o user que está de azul é o que vai ser enviado para a página ejs, que vai puxar o valor
    // o segundo é o valor que estou atribuindo a ele (esta guardando o "Ana")
  });
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
