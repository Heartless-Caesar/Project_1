const express = require('express')
const creme_create_router = express.Router()

const {
    cadastrar_creme,
} = require('../../Controllers/Resultados/Criar_entradas/cadastrar_creme')

creme_create_router.route('/entrada/creme').post(cadastrar_creme)

module.exports = { creme_create_router }
