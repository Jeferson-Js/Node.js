const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDatabase = require("./src/config/connect");
const router = require('./src/routes/routes');
const dotenv = require("dotenv");
dotenv.config();
connectDatabase();
app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
