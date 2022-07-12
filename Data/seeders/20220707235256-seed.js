'use strict'

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
            'fornecedor_fisicos',
            [
                {
                    nome: 'Gould',
                    cpf: 677001480495,
                    data_de_nascimento: '2022-04-01 T09:48:08 +03:00',
                    sexo: 'Outro',
                    cep: 14889749,
                    rua_ou_avenida: 'Sumner Place',
                    complemento:
                        'Nulla exercitation proident excepteur dolor veniam id eiusmod dolor id do sit Lorem nulla.',
                    numero: 755,
                    estado: 'Nebraska',
                    cidade: 'Wright',
                    telefone: '+55 (931) 497-3190',
                    email: 'gouldmcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Alisha',
                    cpf: 600080299128,
                    data_de_nascimento: '2022-03-29 T07:37:55 +03:00',
                    sexo: 'Masculino',
                    cep: 59173065,
                    rua_ou_avenida: 'Forbell Street',
                    complemento:
                        'Ad dolore exercitation velit nulla ut exercitation dolore qui sit.',
                    numero: 401,
                    estado: 'Washington',
                    cidade: 'Washington',
                    telefone: '+55 (892) 521-3440',
                    email: 'alishamcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Madeleine',
                    cpf: 863840008049,
                    data_de_nascimento: '2022-03-08 T10:07:27 +03:00',
                    sexo: 'Outro',
                    cep: 79978794,
                    rua_ou_avenida: 'Greenpoint Avenue',
                    complemento:
                        'Enim nostrud nisi adipisicing ex nulla reprehenderit aute velit incididunt cillum velit enim enim.',
                    numero: 140,
                    estado: 'Utah',
                    cidade: 'Allendale',
                    telefone: '+55 (991) 562-2350',
                    email: 'madeleinemcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Roberts',
                    cpf: 523259042555,
                    data_de_nascimento: '2022-06-17 T09:47:23 +03:00',
                    sexo: 'Feminino',
                    cep: 90135366,
                    rua_ou_avenida: 'Forrest Street',
                    complemento:
                        'Aliquip velit duis officia consectetur officia eu mollit.',
                    numero: 105,
                    estado: 'Maine',
                    cidade: 'Dennard',
                    telefone: '+55 (993) 487-3473',
                    email: 'robertsmcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Kirsten',
                    cpf: 373458537053,
                    data_de_nascimento: '2022-05-07 T05:16:22 +03:00',
                    sexo: 'Outro',
                    cep: 44785477,
                    rua_ou_avenida: 'Kensington Walk',
                    complemento: 'Cillum ex voluptate incididunt est qui.',
                    numero: 353,
                    estado: 'Florida',
                    cidade: 'Lookingglass',
                    telefone: '+55 (830) 560-3050',
                    email: 'kirstenmcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Avery',
                    cpf: 475585393507,
                    data_de_nascimento: '2022-02-10 T10:55:06 +03:00',
                    sexo: 'Outro',
                    cep: 30089462,
                    rua_ou_avenida: 'Lawrence Street',
                    complemento:
                        'Ut Lorem reprehenderit deserunt laboris mollit aute ipsum aliqua sint do deserunt.',
                    numero: 426,
                    estado: 'New Jersey',
                    cidade: 'Trexlertown',
                    telefone: '+55 (841) 581-3346',
                    email: 'averymcfadden@quarex.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('fornecedor_fisicos', null, {})
    },
}
