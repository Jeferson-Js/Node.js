const express = require("express");
const app = express();
const port = process.env.Port || 3000;
const dotenv = require("dotenv");
const Livros = require("./models/Livros.model");
const connectDatabase = require("./database/connect");
dotenv.config();

connectDatabase();
app.use(express.json());

// Rota de exibição
app.get("/livros", async (req, res) => {
  try {
    const livro = await Livros.find();
    res.json(livro);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Busca por id
app.get("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const livro = await Livros.findById(id);
    res.json(livro);
    res.status(200).send("Curso de node");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Adicionando um novo livro
app.post("/livros", async (req, res) => {
  try {
    const livro = new Livros(req.body);
    await livro.save();
    res.json(livro);
    res.status(201).send("Livro adicionado com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Atualizando um livro
app.put("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const livro = await Livros.findByIdAndUpdate(id, req.body, { new: true });
    res.json(livro);
    res.status(200).send("Livro atualizado");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Excluindo um livro
app.delete("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const livro = await Livros.findByIdAndDelete(id);
    res.json(livro);
    res.status(200).send("Livro excluido com sucesso!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
