"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fornecedor_fisico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fornecedor_fisico.init(
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.INTEGER,
      data_de_nascimento: DataTypes.DATE,
      sexo: DataTypes.ENUM,
      cep: DataTypes.INTEGER,
      rua_avenida: DataTypes.STRING,
      complemento: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      estado: DataTypes.ENUM,
      cidade: DataTypes.STRING,
      telefone: DataTypes.NUMBER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fornecedor_fisico",
    }
  );
  return fornecedor_fisico;
};
