const User = require("../models/user.model");

class UerController {
  static paginaPrincipal = async (req, res) => {
    try {
      res.status(200).send({ Title: "Welcome to node.js!" });
    } catch (error) {
      res.satus(404).send("Página não encontrada");
    }
  };

  static listarUsuario = async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send("Error" + error.message);
    }
  };
  static adicionarUsuario = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.json(user);
      res.status(201).send("Usuário cadastrado com sucesso!");
    } catch (error) {
      res.status(500).send("Error" + error.message);
    }
  };

  static buscarUsuarioPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      res.json(user);
    } catch (error) {
      res.status(500).send("Error" + error.message);
    }
  };
  static atualizarUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(user);
      res.status(200).send("Usuário atualizado com sucesso!");
    } catch (error) {
      res.satus(500).send("Error: " + error.message);
    }
  };
  static removerUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndDelete(id);
      res.json(user);
      res.status(200).send("Usuário removido com sucesso!");
    } catch (error) {
      res.status(500).send("Error: " + error.message);
    }
  };
  //   final da class
}
module.exports = UerController;
