const { StatusCodes } = require("http-status-codes");
const { fornecedor_juridico } = require("../Data/models");

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
  } = req.body;

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
    });
    res.status(StatusCodes.CREATED).json({
      msg: "Fornecedor juridico criado",
      fornecedor_juridico: novoUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error.message });
  }
};

module.exports = { cadastrar_fornecedor_juridico };
