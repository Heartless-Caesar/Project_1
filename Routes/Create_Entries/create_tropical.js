const express = require('express')
const tropical_create_router = express.Router()
const { verifyRoles } = require('../../middleware/verifyRoles')

const {
    cadastrar_tropical,
} = require('../../Controllers/Resultados/Criar_entradas/cadastrar_tropical')

tropical_create_router
    .route('entrada/tropical')
    .post(verifyRoles('Admin', 'Secretaria'), cadastrar_tropical)

module.exports = { tropical_create_router }
