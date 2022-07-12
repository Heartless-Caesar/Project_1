'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class resultado_mussarela extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            resultado_mussarela.belongsTo(models.usuario, {
                foreignKey: { name: 'criado_por' },
                keyType: DataTypes.INTEGER,
            })
        }
    }
    resultado_mussarela.init(
        {
            data_da_producao: DataTypes.DATE,
            quantidade_produzida: DataTypes.INTEGER,
            valor_da_pesagem: DataTypes.INTEGER,
            valor_medio_por_peca: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'resultado_mussarela',
        }
    )
    return resultado_mussarela
}
