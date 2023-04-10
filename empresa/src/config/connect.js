const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qgtzmyh.mongodb.net/`
    );
    console.log('Conexão realizada com sucesso!');
  } catch (error) {
    console.log('Erro de conexão', error);
  }
};


module.exports = connectDatabase;
