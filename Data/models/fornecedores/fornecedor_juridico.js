"use strict";
const { Model } = require("sequelize");
const entradas = require("../entradas");
module.exports = (sequelize, DataTypes) => {
  class fornecedor_juridico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fornecedor_juridico.hasMany(models.entradas);
    }
  }
  fornecedor_juridico.init(
    {
      razao_social: DataTypes.STRING,
      nome_fantasia: DataTypes.STRING,
      cnpj: DataTypes.INTEGER,
      num_inscricao_municipal: DataTypes.INTEGER,
      num_inscricao_estadual: DataTypes.INTEGER,
      cep: DataTypes.INTEGER,
      rua_ou_avenida: DataTypes.STRING,
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
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fornecedor_juridico",
    }
  );
  return fornecedor_juridico;
};
