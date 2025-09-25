// importando express

import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte

const router = express.Router()

//ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
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

export default router