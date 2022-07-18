const express = require('express')
const mus_router = express.Router()

const {
    buscar_todo_creme,
} = require('../../Controllers/Resultados/Buscar_entradas/Creme/buscar_todo_creme')

const {
    buscar_creme_single,
} = require('../../Controllers/Resultados/Buscar_entradas/Creme/buscar_creme_single')

mus_router.route('/creme/all').get(buscar_todo_creme)

mus_router.route('/creme/:id').get(buscar_creme_single)
