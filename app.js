const { provider_router } = require("./Routes/provider_routes");
const { user_router } = require("./Routes/user_routes");
const { sequelize } = require("./Data/models/index");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(provider_router);
app.use(user_router);

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
