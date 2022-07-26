const express = require('express')
const user_router = express.Router()

const { cadastro_usuario } = require('../Controllers/Usuarios/cadastro_usuario')
const { login_usuario } = require('../Controllers/Usuarios/login_usuario')

user_router.route('/usuario/cadastro').post(cadastro_usuario)

user_router.route('/usuario/login').post(login_usuario)

module.exports = { user_router }
