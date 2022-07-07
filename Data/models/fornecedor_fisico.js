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
      sexo: DataTypes.ENUM("Masculino", "Feminino", "Outro"),
      cep: DataTypes.INTEGER,
      rua_avenida: DataTypes.STRING,
      complemento: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      estado: DataTypes.ENUM(
        "Acre - AC",
        "Alagoas - AL",
        "Amapá - AP",
        "Amazonas AM",
        "Bahia - BA",
        "Ceará - CE",
        "Espírito Santo - ES",
        "Goiás - GO",
        "Maranhão - MA",
        "Mato Grosso - MT",
        "Mato Grosso do Sul - MS",
        "Minas Gerais - MG",
        "Pará - PA",
        "Paraíba - PB",
        "Paraná - PR",
        "Pernambuco - PE",
        "Piauí - PI",
        "Rio de Janeiro - RJ",
        "Rio Grande do Norte - RN",
        "Rio Grande do Sul - RS",
        "Rondônia - RO",
        "Roraima - RR",
        "Santa Catarina - SC",
        "São Paulo - SP",
        "Sergipe - SE",
        "Tocantins - TO",
        "Distrito Federal - DF"
      ),
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
