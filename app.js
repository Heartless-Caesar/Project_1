const express = require("express");
const { sequelize } = require("./Data/models/index");
const app = express();
const port = 5000;

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
