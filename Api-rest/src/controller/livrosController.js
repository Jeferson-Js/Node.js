const Livros = require("../models/Livros.model");

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livro = await Livros.find();
      res.json(livro);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static livrosPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livro = await Livros.findById(id);
      res.json(livro);
      res.status(200).send("Curso de node");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static livrosAdicionados = async (req, res) => {
    try {
      const livro = new Livros(req.body);
      await livro.save();
      res.json(livro);
      res.status(201).send("Livro adicionado com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static livrosAtualizados = async (req, res) => {
    try {
      const id = req.params.id;
      const livro = await Livros.findByIdAndUpdate(id, req.body, { new: true });
      res.json(livro);
      res.status(200).send("Livro atualizado");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static livrosExcluidos = async (req, res) => {
    try {
      const id = req.params.id;
      const livro = await Livros.findByIdAndDelete(id);
      res.json(livro);
      res.status(200).send("Livro excluido com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  //   fim da class
}

module.exports = LivroController;
