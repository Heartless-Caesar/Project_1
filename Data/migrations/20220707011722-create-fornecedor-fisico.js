'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fornecedor_fisicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      data_de_nascimento: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.ENUM
      },
      cep: {
        type: Sequelize.INTEGER
      },
      rua / avenida: {
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
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.NUMBER
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
    await queryInterface.dropTable('fornecedor_fisicos');
  }
};