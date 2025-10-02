import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
     res.render("produtos", {
    produtos: produtos,
  });
  })
});

export default router;