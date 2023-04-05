const express = require('express');
const livros = require("./livrosRoutes");

const routes = (app) => {
  app.route("/").get((req, res) => {
    try {
      res.status(200).send({ titulo: "Api rest com node.js" });
    } catch (error) {
      res.status(404).send("Error: " + error.message);
    }
  });

  app.use(express.json(), livros);
};

module.exports = routes;
