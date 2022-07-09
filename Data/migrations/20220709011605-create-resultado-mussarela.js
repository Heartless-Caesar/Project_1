'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resultado_mussarelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_da_producao: {
        type: Sequelize.DATE
      },
      quantidade_produzida: {
        type: Sequelize.INTEGER
      },
      valor_da_pesagem: {
        type: Sequelize.INTEGER
      },
      valor_medio_por_peca: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('resultado_mussarelas');
  }
};