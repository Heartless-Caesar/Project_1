const { email_autorizados, usuario } = require('../../Data/models')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const cadastro_usuario = async (req, res) => {
    const { registerEmail, password } = req.body

    const duplicate = await usuario.findOne({ where: { email: registerEmail } })

    if (duplicate) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: `O email ${registerEmail} já possui uma conta cadastrada.`,
        })
    }

    // Admin creation
    if (registerEmail === 'admin2@email.com') {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const adminAcc = await usuario.create({
            email: registerEmail,
            password: hashedPassword,
            role: 2001,
        })

        const token = jwt.sign(
            { email: adminAcc.email, role: adminAcc.roles },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.EXPIRES_IN,
            }
        )

        return res.status(StatusCodes.CREATED).json({
            msg: 'Usuário cadastrado',
            usuario: adminAcc,
            token: token,
        })
    }

    const checkEmail = await email_autorizados.findOne({
        where: { email: registerEmail },
    })

    if (!checkEmail) {
        const all = await email_autorizados.findAll()
        console.log(all)
        console.log(checkEmail)
        return res.status(StatusCodes.UNAUTHORIZED).json({
            msg: 'Email não válido, procure um responsável pelo sistema',
            checkEmail: checkEmail,
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const novoUsuario = await usuario.create({
        email: email,
        password: hashedPassword,
        role: checkEmail.role,
    })

    const token = jwt.sign(
        { email: novoUsuario.email },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.EXPIRES_IN,
        }
    )

    res.status(StatusCodes.CREATED).json({
        msg: 'Usuário cadastrado',
        usuario: novoUsuario.email,
        token: token,
    })
}
module.exports = { cadastro_usuario }
