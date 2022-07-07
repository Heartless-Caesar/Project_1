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
    }
  }
  entradas.init(
    {
      id: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      fk_id_fornecedor: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "entradas",
    }
  );
  return entradas;
};
