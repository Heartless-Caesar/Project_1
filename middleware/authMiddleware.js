const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "No auth header found" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    console.log(user);

    //Auth header sending the email and user role
    req.user = { usuario: { email: user.email, role: user.role } };

    next();
  } catch (error) {
    console.log(req.headers.authorization);

    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "No auth header found" });
  }
};

module.exports = { authMiddleware };
