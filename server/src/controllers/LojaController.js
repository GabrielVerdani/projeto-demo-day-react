const Usuario = require("../models/Usuario");
const Loja = require("../models/Loja");

module.exports = {
  async index(req, res) {
    const lojas = await Loja.findAll()

    return res.json(lojas);
  },

  async find(req, res) {
    const { id_dono } = req.params;

    const usuario = await Usuario.findByPk(id_dono, {
      include: { association: "lojas" }
    });

    if (!usuario) {
      return res.json({ error: "Usuário não encontrado" })
    }

    return res.json(usuario.lojas);
  },

  async store(req, res) {
    const { id_dono } = req.params;
    const { nome, imagem, cnpj, descricao, cep, contato } = req.body;

    const usuario = await Usuario.findByPk(id_dono);

    if (!usuario) {
      return res.json({ error: "Usuário não encontrado" })
    }

    const loja = await Loja.create({ id_dono, nome, imagem, cnpj, descricao, cep, contato });

    return res.json(loja);
  },

  async update(req, res) {
    const { loja_id } = req.params;
    const { nome, imagem, cnpj, descricao, cep, contato } = req.body;

    const loja = await Loja.findByPk(loja_id);

    if (!loja) {
      return res.json({ error: "Loja não encontrada" })
    }

    await loja.update({ nome, imagem, cnpj, descricao, cep, contato });

    return res.json(loja);
  },

  async produtos(req, res) {
    const { loja_id } = req.params;

    const loja = await Loja.findByPk(loja_id, {
      include: { association: "produtos" }
    });

    if (!loja) {
      return res.json({ error: "Loja não encontrada" })
    }

    return res.json(loja.produtos);
  },
}