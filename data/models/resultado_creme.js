'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class resultado_creme extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            resultado_creme.belongsTo(models.usuario, {
                foreignKey: { name: 'criado_por' },
                keyType: DataTypes.INTEGER,
            })
        }
    }
    resultado_creme.init(
        {
            data_da_producao: DataTypes.DATE,
            quantidade_produzida: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'resultado_creme',
        }
    )
    return resultado_creme
}
