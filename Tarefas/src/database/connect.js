const mongoose = require('mongoose')

const mongoDataBase = async () => {
try {
await mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@oliveira-js.7dpwk6w.mongodb.net/?retryWrites=true&w=majority`
);
console.log('Conexão realizada com sucesso!');
} catch (error) {
    console.log('Erro:', error.message);
}
}

module.exports =  mongoDataBase ;
