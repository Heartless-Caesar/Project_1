"use strict";
const { Model } = require("sequelize");
const entradas = require("./entradas");
module.exports = (sequelize, DataTypes) => {
  class fornecedor_fisico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fornecedor_fisico.hasMany(models.entradas);
    }
  }
  fornecedor_fisico.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data_de_nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexo: DataTypes.ENUM("Masculino", "Feminino", "Outro"),
      cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rua_ou_avenida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complemento: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fornecedor_fisico",
    }
  );
  return fornecedor_fisico;
};
