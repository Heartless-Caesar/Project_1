const express = require('express')
const muss_create_router = express.Router()
const { verifyRoles } = require('../../middleware/verifyRoles')

const {
    cadastrar_mussarela,
} = require('../../Controllers/Resultados/Criar_entradas/cadastrar_mussarela')

muss_create_router
    .route('entrada/mussarela')
    .post(verifyRoles[('Admin', 'Secretaria')], cadastrar_mussarela)

module.exports = { muss_create_router }
