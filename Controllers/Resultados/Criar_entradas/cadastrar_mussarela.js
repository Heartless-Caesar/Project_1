const { StatusCodes } = require('http-status-codes')
const { resultado_mussarela } = require('../../../Data/models')

const cadastrar_mussarela = async (req, res) => {
    const {
        data_da_producao,
        quantidade_produzida,
        valor_da_pesagem,
        valor_medio_por_peca,
    } = req.body

    try {
        const novaEntrada = await resultado_mussarela.create({
            data_da_producao: data_da_producao,
            quantidade_produzida: quantidade_produzida,
            valor_da_pesagem: valor_da_pesagem,
            valor_medio_por_peca: valor_medio_por_peca,
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

module.exports = { cadastrar_mussarela }
