const fs = require('fs');

const getTodosUsuarios = () => {
    return JSON.parse(fs.readFileSync("usuarios.json"))
}


module.exports = {
    getTodosUsuarios
}
