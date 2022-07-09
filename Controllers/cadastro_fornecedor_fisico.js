const { StatusCodes } = require("http-status-codes");
const { fornecedor_fisico } = require("../Data/models");

const cadastrar_fornecedor_fisico = async (req, res) => {
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
  } = req.body;

  try {
    let novoUsuario = await fornecedor_fisico.create({
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
    });
    res.status(StatusCodes.CREATED).json({
      msg: "Fornecedor fisico criado",
      fornecedor_fisico: novoUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
};

module.exports = { cadastrar_fornecedor_fisico };
