const express = require("express");
const server = express();
const port = 3000;
const dotenv = require("dotenv");
const { connectToDatabase } = require("./src/database/connect");
const UserModel = require("./src/models/user.model");

dotenv.config();

connectToDatabase();

server.use(express.json());

server.get("/users", async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json(users);
});

server.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

server.post("/users", async (req, res) => {
  const user = await UserModel.create(req.body);

  res.status(201).json(user);
});

server.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

server.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndRemove(id);
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
})



server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
