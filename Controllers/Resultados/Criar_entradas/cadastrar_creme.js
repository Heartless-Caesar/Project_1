const { resultado_creme } = require('../../Data/models')
const { StatusCodes } = require('http-status-codes')

const cadastrar_creme = async (res, res) => {
    const { data_da_producao, quantidade_produzida } = req.body

    try {
        const novaEntrada = await resultado_creme.create({
            data_da_producao: data_da_producao,
            quantidade_produzida: quantidade_produzida,
        })

        return res
            .status(StatusCodes.CREATED)
            .json({ msg: 'Entrada criada', entrada: novaEntrada })
    } catch (error) {
        const errorMessages = []

        error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Algo deu errado ao tentar criar a nova entrada',
            errors: errorMessages,
        })
    }
}

module.exports = { cadastrar_creme }
