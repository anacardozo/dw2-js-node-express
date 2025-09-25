// importando express
import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte
const router = express.Router()

// ROTA DE CLIENTES
router.get("/clientes", (req, res) => {
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

// exportando o objeto router
export default router;