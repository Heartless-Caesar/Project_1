const express = require('express')
const creme_create_router = express.Router()

const {
    cadastrar_creme,
} = require('../../controllers/resultados/criar_entradas/cadastrar_cremerar_creme')

creme_create_router.route('/entrada/creme').post(cadastrar_creme)

module.exports = { creme_create_router }
