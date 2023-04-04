const express = require("express");
const server = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoDataBase = require("./src/database/connect");
const Task = require("./src/models/Tarefas.models");

dotenv.config();
mongoDataBase();
server.use(express.json());

// Rotas do crud
server.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//Rota metodo post
server.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

//Rota metodo put
server.put("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(task);
});

server.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  res.json(task);
});

server.listen(port, (error) => {
  console.log(`Serivor rodando na porta: ${port}`);
});
