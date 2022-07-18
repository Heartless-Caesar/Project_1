const express = require('express')
const mus_router = express.Router()

const {
    buscar_todo_tropical,
} = require('../../Controllers/Resultados/Buscar_entradas/Tropical/buscar_todo_tropical')

const {
    buscar_tropical_single,
} = require('../../Controllers/Resultados/Buscar_entradas/Tropical/buscar_tropical_single')

mus_router.route('/tropical/all').get(buscar_todo_tropical)

mus_router.route('/tropical/:id').get(buscar_tropical_single)
