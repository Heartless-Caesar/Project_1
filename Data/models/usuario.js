"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.fornecedor_fisico);
      Usuario.hasMany(models.fornecedor_juridico);
    }
  }
  Usuario.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.ENUM("Admin", "Secretaria", "Publico"),
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
