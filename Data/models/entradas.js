"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class entradas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      entradas.belongsTo(models.fornecedor_fisico, {
        foreignKey: "fk_id_fornecedor_fisico",
      });
      entradas.belongsTo(models.fornecedor_juridico, {
        foreignKey: "fk_id_fornecedor_juridico",
      });
    }
  }
  entradas.init(
    {
      quantidade: DataTypes.INTEGER,
      fk_id_fornecedor_fisico: DataTypes.INTEGER,
      fk_id_fornecedor_juridico: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "entradas",
    }
  );
  return entradas;
};
