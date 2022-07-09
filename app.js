const express = require("express");
const { sequelize } = require("./Data/models/index");
const { errorHandlerMiddleware } = require("./middleware/errorHandler");
const app = express();
const port = 5000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
