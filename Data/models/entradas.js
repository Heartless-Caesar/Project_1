'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class entradas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            entradas.belongsTo(models.fornecedor_fisico, {
                foreignKey: 'id',
                keyType: DataTypes.INTEGER,
            })
            entradas.belongsTo(models.fornecedor_juridico, {
                foreignKey: 'id',
                keyType: DataTypes.INTEGER,
            })
            entradas.belongsTo(models.usuario, {
                foreignKey: { name: 'criado_por' },
                keyType: DataTypes.INTEGER,
            })
        }
    }
    entradas.init(
        {
            quantidade: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'entradas',
        }
    )
    return entradas
}
