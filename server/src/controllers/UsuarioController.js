const Usuario = require("../models/Usuario");

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios)
  },

  async find(req, res) {
    const { usuario_id } = req.params

    const usuario = await Usuario.findByPk(usuario_id);

    if (!usuario) {
      return res.json({ error: "Usuário não encontrado" })
    }

    return res.json(usuario);
  },

  async store(req, res) {
    const { nome, email, senha, genero, celular, cep } = req.body;

    const usuario = await Usuario.create({ nome, email, senha, genero, celular, cep });

    return res.json(usuario);
  },

  async update(req, res) {
    const { usuario_id } = req.params
    const { nome, email, senha, genero, celular, cep } = req.body;

    const usuario = await Usuario.findByPk(usuario_id);

    if (!usuario) {
      return res.json({ error: "Usuário não encontrado" })
    }

    await usuario.update({ nome, email, senha, genero, celular, cep });

    return res.json(usuario);
  },

  async delete(req, res) {
    const { usuario_id } = req.params

    const usuario = await Usuario.findByPk(usuario_id);

    if (!usuario) {
      return res.json({ error: "Usuário não encontrado" })
    }

    await usuario.destroy();

    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  }
}