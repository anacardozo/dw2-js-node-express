import express from "express";
const router = express.Router();
//Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //Select * from clientes
  Cliente.findAll()
    .then((clientes) => {
      // then => promessa bem sucedida
      res.render("clientes", {
        clientes: clientes,
      });
      //catch => falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  //coletando os dados do formulário
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    //coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      // se der certo redireciona para a pagina clientes
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//ROTA DE EXCLUSÃO DO CLIENTE
//:id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  //.destroy() -> exclui um registro do banco
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
  //Buscando o cliente pela ID
  // findByPk() -> busca um regsitro pela chave primária (id)
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente : cliente
    })
  })
})

export default router;
