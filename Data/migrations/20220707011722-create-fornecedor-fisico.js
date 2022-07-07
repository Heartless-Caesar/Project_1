"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fornecedor_fisicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.INTEGER,
      },
      data_de_nascimento: {
        type: Sequelize.DATE,
      },
      sexo: {
        type: Sequelize.ENUM("Masculino", "Feminino", "Outro"),
      },
      cep: {
        type: Sequelize.INTEGER,
      },
      rua_ou_avenida: {
        type: Sequelize.STRING,
      },
      complemento: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.INTEGER,
      },
      estado: {
        type: Sequelize.ENUM(
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
      },
      cidade: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.NUMBER,
      },
      email: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("fornecedor_fisicos");
  },
};
