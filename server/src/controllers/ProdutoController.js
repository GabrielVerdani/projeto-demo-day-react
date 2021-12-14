const Produto = require("../models/Produto");
const Loja = require("../models/Loja");

module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll();

    return res.json(produtos);
  },

  async find(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.json({ error: "Produto não encontrado" })
    }

    return res.json(produto);
  },

  async store(req, res) {
    const { id_loja } = req.params;
    const { nome, imagem, preco, descricao, caracteristicas, id_categoria } = req.body;

    const loja = await Loja.findByPk(id_loja);

    if (!loja) {
      return res.json({ error: "Loja não encontrada" })
    }

    const produto = await Produto.create({ nome, imagem, preco, descricao, caracteristicas, id_loja, id_categoria })

    return res.json(produto)
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, imagem, preco, descricao, caracteristicas, id_categoria } = req.body;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.json({ error: "Produto não encontrado" })
    }

    await produto.update({ nome, imagem, preco, descricao, caracteristicas, id_categoria })

    return res.json(produto)
  },

  async delete(req, res) {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.json({ error: "Produto não encontrado" })
    }

    await produto.destroy();

    return res.json({ success: "Produto deletado" })
  },
}