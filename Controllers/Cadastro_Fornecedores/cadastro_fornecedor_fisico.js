const { StatusCodes } = require('http-status-codes')
const { fornecedor_fisico } = require('../../Data/models')

const cadastrar_fornecedor_fisico = async (req, res) => {
    // INPUTS QUE SÃO INSERIDOS PELO USUÁRIO
    const {
        nome,
        cpf,
        cep,
        data_de_nascimento,
        sexo,
        rua_ou_avenida,
        numero,
        estado,
        cidade,
        telefone,
        email,
    } = req.body

    //CRIAÇÃO DE FORNECEDOR FISICO
    try {
        let novo_fornecedor_fisico = await fornecedor_fisico.create({
            nome: nome,
            cpf: cpf,
            data_de_nascimento: data_de_nascimento,
            sexo: sexo,
            cep: cep,
            rua_ou_avenida: rua_ou_avenida,
            numero: numero,
            estado: estado,
            cidade: cidade,
            telefone: telefone,
            email: email,
        })

        //RESPOSTA CASO TUDO OCORRA NORMALMENTE
        res.status(StatusCodes.CREATED).json({
            msg: 'Fornecedor fisico criado',
            fornecedor_fisico: novo_fornecedor_fisico,
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

module.exports = { cadastrar_fornecedor_fisico }
