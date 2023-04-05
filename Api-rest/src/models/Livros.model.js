const mongoose = require("mongoose");

const livrosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  editora: {
    type: String,
    required: true,
  },
});

const LivroModel = mongoose.model("Livros", livrosSchema);

module.exports = LivroModel;
