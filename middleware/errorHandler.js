const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.stausCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong...",
  };

  if (err.name === "Validation error") {
    customError.message = Object.values(err.errors)
      .map((x) => x.message)
      .join(",");
    customError.statusCode = 400;
  }

  if (err.name === "CastError") {
    customError.message = `Elemento de id ${err.value} não encontrado`;
    customError.statusCode = 404;
  }

  if (err.name === "Unauthorized") {
    customError.message = "Email ou senha invalidos";
    customError.statusCode = 401;
  }
  return res.status(customError.statusCode).message(customError.message);
};
