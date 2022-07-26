const express = require('express')
const mus_router = express.Router()

const {
    buscar_todo_tropical,
} = require('../../controllers/resultados/buscar_entradas/tropical/buscar_todo_tropical')

const {
    buscar_tropical_single,
} = require('../../controllers/resultados/buscar_entradas/tropical/buscar_tropical_single')

mus_router.route('/tropical/all').get(buscar_todo_tropical)

mus_router.route('/tropical/:id').get(buscar_tropical_single)

module.exports = {mus_router}