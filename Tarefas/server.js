const express = require('express')
const server = express()
const port = 3000;
const dotenv = require('dotenv')

dotenv.config();
server.get('/', (req, res ) => {
    res.send('Hello Node');
});


server.listen(port, (error) => {
    console.log(`Serivor rodando na porta: ${port}`);
})
