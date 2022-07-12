const express = require("express");
const provider_router = express.Router();
const {
  cadastrar_fornecedor_fisico,
} = require("../Controllers/Cadastro_Fornecedores/cadastro_fornecedor_fisico");
const {
  cadastrar_fornecedor_juridico,
} = require("../Controllers/Cadastro_Fornecedores/cadastro_fornecedor_juridico");

const { verifyRoles } = require("../middleware/verifyRoles");

//Routes with role verification,
//Only users with the role passed as a parameter can access the endpoint
provider_router
  .route("/fornecedor/fisico/cadastro")
  .post(verifyRoles("Admin"), cadastrar_fornecedor_fisico);

provider_router
  .route("/fornecedor/juridico/cadastro")
  .post(cadastrar_fornecedor_juridico);

module.exports = { provider_router };
