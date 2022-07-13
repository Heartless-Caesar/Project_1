const { StatusCodes } = require('http-status-codes')
const { fornecedor_juridico } = require('../../Data/models')

const cadastrar_fornecedor_juridico = async (req, res) => {
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
        let novoUsuario = await fornecedor_juridico.create({
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
            msg: 'Fornecedor juridico criado',
            fornecedor_juridico: novoUsuario,
        })
    } catch (error) {
        const errorMessages = []

        error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Something went wrong in provider creation',
            errors: errorMessages,
        })
    }
}

module.exports = { cadastrar_fornecedor_juridico }
