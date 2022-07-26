const { StatusCodes } = require('http-status-codes')
const { usuario } = require('../../Data/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const login_usuario = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: 'Por favor providencie ambos credenciais' })
    }

    const usuarioDb = await usuario.findOne({ where: { email: email } })

    if (!usuarioDb) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `O usuário de email ${email} não existe` })
    }

    const senhaParaComparacao = await usuario.findOne({
        where: { email: email },
    })

    const comparacao = await bcrypt.compare(senha, senhaParaComparacao.password)

    if (!comparacao) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ msg: 'A senha inserida não está correta' })
    }

    const userRoles = usuarioDb.role

    const token = jwt.sign(
        { UserInfo: { email: usuarioDb.email, roles: userRoles } },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.EXPIRES_IN,
        }
    )

    res.status(StatusCodes.OK).json({
        msg: 'usuario logado',
        usuario: usuarioDb.email,
        token: token,
    })
}

module.exports = { login_usuario }
