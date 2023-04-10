const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDatabase = require("./src/config/connect");
const dotenv = require("dotenv");
dotenv.config();
connectDatabase();
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
