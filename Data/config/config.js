const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  Storage: "../Zeus.db",
});

module.exports = { sequelize };
