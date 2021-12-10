const express = require("express");
const routes = require("./routes.js");
const db = require("./src/db.js");

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: crudnodejs`));

app.listen(3301, () => console.log("Servidor iniciado na porta 3301"));