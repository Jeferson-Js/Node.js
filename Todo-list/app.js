const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/db");
const bodyParser = require("body-parser");

dotenv.config();
connectToDatabase();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded())
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
