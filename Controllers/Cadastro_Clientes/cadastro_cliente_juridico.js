const { StatusCodes } = require('http-status-codes')
const { cliente_juridico } = require('../../Data/models')

const cadastrar_cliente_juridico = async (req, res) => {
    const {
        razao_social,
        nome_fantasia,
        cnpj,
        num_inscricao_municipal,
        num_inscricao_estadual,
        cep,
        rua_ou_avenida,
        complemento,
        estado,
        cidade,
        telefone,
        email,
    } = req.body

    try {
        let novoCliente = await cliente_juridico.create({
            razao_social: razao_social,
            nome_fantasia: nome_fantasia,
            cnpj: cnpj,
            num_inscricao_municipal: num_inscricao_municipal,
            num_inscricao_estadual: num_inscricao_estadual,
            cep: cep,
            rua_ou_avenida: rua_ou_avenida,
            complemento: complemento,
            estado: estado,
            cidade: cidade,
            telefone: telefone,
            email: email,
        })
        return res.status(StatusCodes.CREATED).json({
            msg: 'Cliente juridico criado',
            cliente_juridico: novoCliente,
        })
    } catch (error) {
        //const errorMessages = []

        //error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Something went wrong in client creation',
            errors: error,
        })
    }
}

module.exports = { cadastrar_cliente_juridico }
