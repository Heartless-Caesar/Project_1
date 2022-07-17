const { StatusCodes } = require('http-status-codes')
const { resultado_mussarela } = require('../../../Data/models')

const buscar_mussarela_single = async (req, res) => {
    const { id } = req.params

    const entrada = await resultado_mussarela.findOne({ where: { id: id } })

    return res.status(StatusCodes.OK).json({ entrada: entrada })
}
