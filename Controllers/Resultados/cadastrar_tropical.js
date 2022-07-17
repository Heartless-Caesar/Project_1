const { StatusCodes } = require('http-status-codes')
const { resultado_tropical } = require('../../Data/models')

const entrada_tropical = async (req, res) => {
    const { data_da_producao, quantidade_produzida } = req.body

    try {
        const novaEntrada = await resultado_tropical.create({
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

module.exports = { entrada_tropical }
