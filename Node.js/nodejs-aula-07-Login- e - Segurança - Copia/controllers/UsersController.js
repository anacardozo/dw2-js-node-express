import express from "express";
const router = express.Router()
//Importando o model de usuário
import User from "../models/User.js";

//Rota de Login
router.get("/login", (req, res) => {
    res.render("login");
});

//Rota de Cadastro
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

//Rota de Criação de Usuário
router.post("/createUser", (req, res) => {
    //Coletando os dados do formulario
    const email = req.body.email
    const password = req.body.password
    //Enviando para o banco
    User.create({
        email: email,
        password: password
    }).then(() => {
        res.redirect("/login");
    }).catch(error => {
        console.log(error)
    })
})

export default router;