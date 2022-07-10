//TODO: Add system users email table for verification on registration,
//this auxiliary table will be used so that a user's password will be hashed
//and salted by the string of their choice

//If <provided email> is in aux email table the user will register with their password of choice
const { StatusCodes } = require("http-status-codes");
const { email_autorizados, usuario } = require("../../Data/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Usuário cadastrado", usuario: novoUsuario });
};
