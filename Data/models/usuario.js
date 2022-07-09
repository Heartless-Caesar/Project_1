"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.fornecedor_fisico);
      usuario.hasMany(models.fornecedor_juridico);
      usuario.hasMany(models.resultado_tropical, {
        foreignKey: { name: "usuarioId" },
      });
      usuario.hasMany(models.resultado_mussarela, {
        foreignKey: { name: "usuarioId" },
      });
      usuario.hasMany(models.resultado_creme, {
        foreignKey: { name: "usuarioId" },
      });
    }
  }
  usuario.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("Admin", "Secretaria", "Publico"),
    },
    {
      sequelize,
      modelName: "usuario",
    }
  );
  return usuario;
};
