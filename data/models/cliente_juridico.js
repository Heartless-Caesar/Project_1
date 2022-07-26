'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente_juridico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cliente_juridico.init({
    razao_social: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    cnpj: DataTypes.INTEGER,
    num_ins_municipal: DataTypes.INTEGER,
    num_ins_estadual: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    rua_ou_avenida: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente_juridico',
  });
  return cliente_juridico;
};