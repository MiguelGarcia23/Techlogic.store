module.exports = (sequelize, dataTypes) =>{
    let alias= "Brands"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        brandName:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "brands",
        timestamps: false
    }

    const Brands = sequelize.define(alias,cols, config);

    Brands.associate = function(models){
        Brands.hasMany(models.Products,{
            as: "products",
            foreignKey: "brandId"
        })
    }
    
    return Brands;
}