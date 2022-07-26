const { StatusCodes } = require('http-status-codes')
const { resultado_creme } = require('../../../../Data/models')

const buscar_creme_single = async (req, res) => {
    const { id } = req.params

    try {
        const entrada = await resultado_creme.findOne({ where: { id: id } })

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

module.exports = { buscar_creme_single }
