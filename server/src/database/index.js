const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Usuario = require("../models/Usuario");
const Loja = require("../models/Loja");
const Categoria = require("../models/Categoria");
const Produto = require("../models/Produto");

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Loja.init(connection);
Categoria.init(connection);
Produto.init(connection);

Usuario.associate(connection.models);
Loja.associate(connection.models);
Categoria.associate(connection.models);
Produto.associate(connection.models);

module.exports = connection;