const express = require("express");
const LivrosController = require("../controller/livrosController.js");

const router = express.Router();

router.get("/livros", LivrosController.listarLivros);
router.get("/livros/:id", LivrosController.livrosPorId);
router.post("/livros", LivrosController.livrosAdicionados);
router.put("/livros/:id", LivrosController.livrosAtualizados);
router.delete("/livros/:id", LivrosController.livrosExcluidos);

module.exports = router;
