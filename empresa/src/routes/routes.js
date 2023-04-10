const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

// Rota principal da api
router.get("/", Controller.paginaPrincipal);
// Rota de listar usuários!
router.get("/usuarios", Controller.listarUsuario);
// Rota de adicionar usuários!
router.post("/usuarios", Controller.adicionarUsuario);
// Rota de buscar usuário pelo id!
router.get("/usuarios/:id", Controller.buscarUsuarioPorId);
// Rota de atualização de usuário!
router.put("/usuarios/:id", Controller.atualizarUsuario);
// Rota de remoção de usuário!
router.delete("/usuarios/:id", Controller.removerUsuario);

module.exports = router;
