module.exports = (sequelize, dataTypes) => {
    const alias = 'Item';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        precio: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'items_de_factura',
        timestamps: false
    };

    const Item = sequelize.define(alias, cols, config);

    Item.associate = (models) => {
        Item.hasMany(models.Factura, {
            as: 'facturas',
            foreingKey: 'facturas_id'
        }),
        Item.hasMany(models.Curso, {
                as: 'cursos',
                foreingKey: 'cursos_id'
        }),
        Item.hasMany(models.Sala, {
                as: 'salas',
                foreingKey: 'salas_id'
        })
    }

    return Item;
}