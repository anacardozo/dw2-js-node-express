import express from "express";
const router = express.Router();
//Importando o model de usuário
import User from "../models/User.js";
//Importando o bcrypt
import bcrypt from "bcrypt";
import { where } from "sequelize";

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
  const email = req.body.email;
  const password = req.body.password;
  //Verificando se o usuario ja esta cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    //Seo usuario não exisitir
    if (user == undefined) {
      //FARÁ o cadastro
      //Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      //Enviando para o banco
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
      //Se o usuario Já exisitir
    } else {
      res.send(`O usuário informado já esta cadastrado! <br>
            <a href="/login">Tentar Novamente.</a>`);
    }
  });
});

//Rota de Autenficação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //Busca o usuario no banco
  User.findOne({ where: { email: email } }).then((user) => {
    //Se o usuario existir
    if (user != undefined) {
      //Validação da senha
      const correct = bcrypt.compareSync(password, user.password);
      //Se a senha for valida
      if (correct) {
        //Autoriza o Login
        //Gerando a sessão para o usuario
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        // res.send(`Usuário logado é: <br>
        //     ID: ${req.session.user["id"]}<br>
        //     E-mail: ${req.session.user["email"]}`);
        res.redirect("/");
        //Se a senha não for valida
      } else {
        res.send(`A senha digitada está incorreta! <br> 
            <a href="/login">Tentar novamente</a>`);
      }
      //se o usuario não existir
    } else {
      res.send(`Usuário informado não existe! <br>
            <a href="/login">Tentar novamente</a>`);
    }
  });
});

//Rota de Logout
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

export default router;
