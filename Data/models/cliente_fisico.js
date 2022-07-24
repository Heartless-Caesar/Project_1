'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente_fisico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cliente_fisico.init({
    nome: DataTypes.STRING,
    data_de_nascimento: DataTypes.DATE,
    cpf: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    rua_ou_avenida: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    telefone: DataTypes.NUMBER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente_fisico',
  });
  return cliente_fisico;
};