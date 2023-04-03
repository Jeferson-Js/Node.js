const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.uoyprx9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.log("Erro ao se conectar ao banco!", error);
  }
};

module.exports = { connectToDatabase };
