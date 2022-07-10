const express = require("express");
const provider_router = express.Router();
const {
  cadastrar_fornecedor_fisico,
} = require("../Controllers/cadastro_fornecedor_fisico");
const {
  cadastrar_fornecedor_juridico,
} = require("../Controllers/cadastro_fornecedor-juridico");

provider_router
  .route("/fornecedor/fisico/cadastro")
  .post(cadastrar_fornecedor_fisico);
provider_router
  .route("/fornecedor/juridico/cadastro")
  .post(cadastrar_fornecedor_juridico);

module.exports = { provider_router };