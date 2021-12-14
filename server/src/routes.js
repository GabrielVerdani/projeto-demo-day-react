const express = require("express");

const UsuarioController = require("./controllers/UsuarioController");
const LojaController = require("./controllers/LojaController");
const CategoriaController = require("./controllers/CategoriaController");
const ProdutoController = require("./controllers/ProdutoController");

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:usuario_id', UsuarioController.find);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:usuario_id', UsuarioController.update);
routes.delete('/usuarios/:usuario_id', UsuarioController.delete);

routes.get('/lojas', LojaController.index);
routes.get('/lojas/:id_dono', LojaController.find);
routes.get('/lojas/:loja_id/produtos/', LojaController.produtos);
routes.post('/lojas/:id_dono', LojaController.store);
routes.put('/lojas/:loja_id', LojaController.update);

routes.get('/categorias', CategoriaController.index);
routes.post('/categorias', CategoriaController.store);

routes.get('/produtos/', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.find);
routes.post('/produtos/:id_loja', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

module.exports = routes;