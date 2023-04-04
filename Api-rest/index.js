const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port =  process.env. Port || 3000;

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello API-REST');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
