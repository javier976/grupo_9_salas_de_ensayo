module.exports = (sequelize, dataTypes) => {
    const alias = 'Factura';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_factura: {
            type: dataTypes.DATE,
            allowNull: false
        },
        direccion_de_facturacion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        ciudad_de_facturacion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        estado_provincia_de_facturacion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pais_de_facturacion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL,
            allowNull: false
        }
    };

    const config = {
        tableName: 'facturas',
        timestamps: false
    };

    const Factura = sequelize.define(alias, cols, config);
    Factura.associate = (models) => {
        Factura.hasMany(models.Usuario, {
            as: 'usuarios',
            foreingKey: 'usuarios_id'
        })
    }

    return Factura;
}