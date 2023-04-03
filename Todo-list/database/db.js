const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cpewoki.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  try {
    return console.log("Conexao realizada com sucesso!");
  } catch (error) {
    console.log("Erro ao se conectar com bonco!");
  }
};

module.exports = connectToDatabase;
