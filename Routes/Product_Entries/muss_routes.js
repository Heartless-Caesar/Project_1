const express = require('express')
const mus_router = express.Router()

const {
    buscar_toda_mussarela,
} = require('../../Controllers/Resultados/Buscar_entradas/Mussarela/buscar_toda_mussarela')

const {
    buscar_mussarela_single,
} = require('../../Controllers/Resultados/Buscar_entradas/Mussarela/buscar_mussarela_single')

mus_router.route('/mussarela/all').get(buscar_toda_mussarela)

mus_router.route('/mussarela/:id').get(buscar_mussarela_single)
