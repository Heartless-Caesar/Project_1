const { StatusCodes } = require('http-status-codes')
const { resultado_mussarela } = require('../../../Data/models')

const buscar_toda_mussarela = async (req, res) => {
    try {
        const getAll = await resultado_mussarela.findAll()

        res.status(StatusCodes.OK).json({
            msg: 'GET successfull',
            entradas: getAll,
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Algo deu errado ao tentar buscar todas as entradas',
            errors: error,
        })
    }
}

module.exports = { buscar_toda_mussarela }
