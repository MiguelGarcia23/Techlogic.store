module.exports = (sequelize, dataTypes) =>{
    let alias= "Collections"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        collectionName:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "collections",
        timestamps: false
    }

    const Collections = sequelize.define(alias,cols, config);

    Collections.associate = function(models){
        Collections.hasMany(models.Products,{
            as: "products",
            foreignKey: "collectionId"
        })
    }
    
    return Collections;
}