const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@books.8tmi3hc.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDatabase;
