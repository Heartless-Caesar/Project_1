const express = require('express')
const client_router = express.Router()
const {
    cadastrar_cliente_fisico,
} = require('../../Controllers/Cadastro_Clientes/cadastro_cliente_fisico')
const {
    cadastrar_cliente_juridico,
} = require('../../Controllers/Cadastro_Clientes/cadastro_cliente_juridico')

const { verifyRoles } = require('../middleware/verifyRoles')

//Routes with role verification,
//Only users with the role passed as a parameter can access the endpoint
client_router
    .route('/cliente/fisico/cadastro')
    .post(verifyRoles('Admin'), cadastrar_cliente_fisico)

client_router
    .route('/cliente/juridico/cadastro')
    .post(cadastrar_cliente_juridico)

module.exports = { client_router }
