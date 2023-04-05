const express = require("express");
const routes = require("./src/routes/index");
const connectDatabase = require("./src/database/connect");

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
