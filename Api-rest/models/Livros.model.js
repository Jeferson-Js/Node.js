const mongoose = require("mongoose");

const livrosSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const LivroModel = mongoose.model("Livros", livrosSchema);

module.exports = LivroModel;
