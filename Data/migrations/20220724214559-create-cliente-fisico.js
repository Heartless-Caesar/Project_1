'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cliente_fisicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_de_nascimento: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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
    await queryInterface.dropTable('cliente_fisicos');
  }
};