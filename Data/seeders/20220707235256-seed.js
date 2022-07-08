"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "fornecedor_fisicos",
      [
        [
          {
            id: 7,
            cpf: 563941484750,
            data_de_nascimento: "2022-04-10 T09:18:12 +03:00",
            sexo: "Outro",
            rua: "Vanderbilt Street",
            numero: 921,
            estado: "American Samoa",
            cidade: "Dola",
            telefone: "+55 (941) 475-2669",
            email: "briannareynolds@coriander.com",
          },
          {
            id: 8,
            cpf: 906336455032,
            data_de_nascimento: "2022-01-20 T10:31:23 +03:00",
            sexo: "Outro",
            rua: "Guernsey Street",
            numero: 961,
            estado: "Massachusetts",
            cidade: "Denio",
            telefone: "+55 (980) 468-3876",
            email: "briannareynolds@coriander.com",
          },
          {
            id: 7,
            cpf: 223601176575,
            data_de_nascimento: "2022-04-26 T07:07:27 +03:00",
            sexo: "F",
            rua: "Horace Court",
            numero: 182,
            estado: "New Jersey",
            cidade: "Tuskahoma",
            telefone: "+55 (819) 515-3410",
            email: "briannareynolds@coriander.com",
          },
          {
            id: 10,
            cpf: 122189737627,
            data_de_nascimento: "2022-05-22 T02:13:08 +03:00",
            sexo: "M",
            rua: "Bills Place",
            numero: 807,
            estado: "Ohio",
            cidade: "Jacumba",
            telefone: "+55 (887) 512-2022",
            email: "briannareynolds@coriander.com",
          },
          {
            id: 4,
            cpf: 956442380748,
            data_de_nascimento: "2022-06-04 T09:05:05 +03:00",
            sexo: "Outro",
            rua: "Townsend Street",
            numero: 314,
            estado: "Marshall Islands",
            cidade: "Alden",
            telefone: "+55 (976) 594-3123",
            email: "briannareynolds@coriander.com",
          },
        ],
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
