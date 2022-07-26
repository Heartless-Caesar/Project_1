const { StatusCodes } = require('http-status-codes')
const { cliente_fisico } = require('../../Data/models')

const cadastrar_cliente_fisico = async (req, res) => {
    // INPUTS QUE SÃO INSERIDOS PELO USUÁRIO
    const {
        nome,
        cpf,
        cep,
        data_de_nascimento,
        sexo,
        rua_ou_avenida,
        complemento,
        numero,
        estado,
        cidade,
        telefone,
        email,
    } = req.body

    //CRIAÇÃO DE CLIENTE FISICO
    try {
        let novo_cliente_fisico = await cliente_fisico.create({
            nome: nome,
            cpf: cpf,
            data_de_nascimento: data_de_nascimento,
            sexo: sexo,
            cep: cep,
            rua_ou_avenida: rua_ou_avenida,
            complemento: complemento,
            numero: numero,
            estado: estado,
            cidade: cidade,
            telefone: telefone,
            email: email,
        })

        //RESPOSTA CASO TUDO OCORRA NORMALMENTE
        res.status(StatusCodes.CREATED).json({
            msg: 'Cliente fisico criado',
            cliente_fisico: novo_cliente_fisico,
        })
    } catch (error) {
        //console.log(error)
        const errorMessages = []

        error.errors.forEach((x) => errorMessages.push(x.message))

        return res.status(StatusCodes.BAD_REQUEST).json({
            msg: 'Something went wrong in client creation',
            errors: errorMessages,
        })
    }
}

module.exports = { cadastrar_cliente_fisico }
