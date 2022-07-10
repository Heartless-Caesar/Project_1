const { email_autorizados, usuario } = require("../../Data/models");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const cadastrar_usuario = async (req, res) => {
  const { email, password } = req.body;

  const duplicate = await usuario.findOne({ where: { email: email } });

  if (duplicate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `O email ${email} já possui uma conta cadastrada.` });
  }

  const checkEmail = await email_autorizados.findOne({
    where: { email: email },
  });

  if (!checkEmail) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Email não válido, procure um responsável pelo sistema" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const novoUsuario = await usuario.create({
    email: email,
    password: hashedPassword,
    role: checkEmail.role,
  });

  const token = jwt.sign(
    { id: novoUsuario.id, email: novoUsuario.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES_IN }
  );

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Usuário cadastrado", usuario: novoUsuario });
};

module.exports = { cadastrar_usuario };
