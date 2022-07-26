const { StatusCodes } = require('http-status-codes')
const { resultado_tropical } = require('../../../../data/models')

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
        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Algo deu errado ao tentar buscar uma entrada específica',
            errors: error,
        })
    }
}

module.exports = { buscar_tropical_single }
