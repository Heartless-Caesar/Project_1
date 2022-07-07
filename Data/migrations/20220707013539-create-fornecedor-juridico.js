'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fornecedor_juridicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razao_social: {
        type: Sequelize.STRING
      },
      nome_fantasia: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.INTEGER
      },
      num_inscricao_municipal: {
        type: Sequelize.INTEGER
      },
      num_inscricao_estadual: {
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.INTEGER
      },
      rua_ou_avenida: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.ENUM
      },
      cidade: {
        type: Sequelize.ENUM
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fornecedor_juridicos');
  }
};