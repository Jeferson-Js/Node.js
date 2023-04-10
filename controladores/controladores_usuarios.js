const { getTodosUsuarios } = require('../servicos/usuarios')

const getUsuarios = (req, res) => {
  try {
    const usuarios = getTodosUsuarios()
    res.send(usuarios);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};

module.exports = {
  getUsuarios,
};
