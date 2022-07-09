const { StatusCodes } = require("http-status-codes");
const fornecedor_fisico = require("../Data/models/fornecedor_fisico");

const cadastrar_fornecedor_fisico = async (req, res) => {
  const {
    cpf,
    data_de_nascimento,
    sexo,
    rua_avenida,
    numero,
    estado,
    cidade,
    telefone,
    email,
  } = req.body;

  const novoUsuario = await fornecedor_fisico.create({
    cpf,
    data_de_nascimento,
    sexo,
    rua_avenida,
    numero,
    estado,
    cidade,
    telefone,
    email,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Fornecedor fisico criado", fornecedor_fisico: novoUsuario });
};

module.exports = { cadastrar_fornecedor_fisico };
