// importando express
import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte

const router = express.Router()

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
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

// exportando o objeto router

export default router