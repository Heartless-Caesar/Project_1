const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usuario } = require("../../Data/models");
const { StatusCodes } = require("http-status-codes");

const login_usuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Por favor providencie ambos credenciais" });
  }

  const usuario = await usuario.findOne({ where: { email: email } });

  if (!usuario) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `O usuário de email ${email} não existe` });
  }

  const senhaParaComparacao = await usuario.findOne({
    where: { email: email },
  });

  const comparacao = await bcrypt.compare(senha, senhaParaComparacao.password);

  if (!comparacao) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "A senha inserida não está correta" });
  }

  const token = jwt.sign({ email: usuario.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

  res.status(StatusCodes.OK).json({ msg: "usuario logado" });
};

module.exports = { login_usuario };
