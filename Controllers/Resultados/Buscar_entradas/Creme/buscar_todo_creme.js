const { StatusCodes } = require('http-status-codes')
const { resultado_creme } = require('../../../Data/models')

const buscar_todo_creme = async (req, res) => {
    try {
        const getAll = await resultado_creme.findAll()

        res.status(StatusCodes.OK).json({
            msg: 'GET successfull',
            entradas: getAll,
        })
    } catch (error) {
        const errorMessages = []

        error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Algo deu errado ao tentar buscar todas as entradas',
            errors: errorMessages,
        })
    }
}

module.exports = { buscar_todo_creme }
