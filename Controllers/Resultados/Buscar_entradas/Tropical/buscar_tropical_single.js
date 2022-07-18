const { StatusCodes } = require('http-status-codes')
const { resultado_tropical } = require('../../../../Data/models')

const buscar_tropical_single = async (req, res) => {
    const { id } = req.params

    try {
        const entrada = await resultado_tropical.findOne({ where: { id: id } })

        if (!entrada) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ msg: `Elemento de id ${id} não existe` })
        }

        res.status(StatusCodes.OK).json({ entrada: entrada })
    } catch (error) {
        const errorMessages = []

        error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Algo deu errado ao tentar buscar uma entrada específica',
            errors: errorMessages,
        })
    }
}

module.exports = { buscar_tropical_single }
