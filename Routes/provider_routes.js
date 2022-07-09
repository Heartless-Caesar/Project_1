const express = require("express");
const provider_router = express.Router();
const {
  cadastrar_fornecedor_fisico,
} = require("../Controllers/cadastro_fornecedor_fisico");

provider_router.route("/provider/create").post(cadastrar_fornecedor_fisico);

module.exports = { provider_router };
