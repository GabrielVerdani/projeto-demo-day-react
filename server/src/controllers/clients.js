const ClientRepository = require("../models/clientsModel");

async function findAll(req, res) {
  const result = await ClientRepository.findAll()
  res.json(result);
}

async function findClient(req, res) {
  const result = await ClientRepository.findByPk(req.params.id)
  res.json(result);
}

async function addClient(req, res) {
  const result = ClientRepository.create({
    nome: req.body.nome,
    email: req.body.email,
  });
  res.json(result);
}

async function updateClient(req, res) {
  await ClientRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  );

  const result = await ClientRepository.findByPk(req.params.id);
  res.json(result);
}

async function deleteClient(req, res) {
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    }
  });

  const result = await ClientRepository.findAll();
  res.json(result);
}

module.exports = { findAll, findClient, addClient, updateClient, deleteClient };