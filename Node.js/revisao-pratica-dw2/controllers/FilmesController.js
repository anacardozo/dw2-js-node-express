import express from "express";
import Filme from "../models/Filmes.js";
//carrega o router dentro da variavel
const router = express.Router();

//READ
router.get("/", (req, res) => {
    Filme.findAll().then((filmes) => {
        res.render("filmes", {
            //pega as listas do banco de dados e guarda em uma variavel
            filmes: filmes,
        });
    }).catch(error => {
        console.log(error)
    });
});

//rota de cadastro de filmes
router.post("/filmes/new", (req,res) => {
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const duracao = req.body.duracao;

    Filme.create({
        titulo: titulo,
        genero: genero,
        duracao: duracao,
    }).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error)
    });
});

//rota de deletar o filme
router.get("/filmes/delete/:id", (req,res) => {
    const id = req.params.id;

    Filme.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error)
    });
});

export default router;