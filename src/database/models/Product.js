module.exports = (sequelize, dataTypes) =>{
    let alias= "Products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING
        } ,
        description:{
            type: dataTypes.TEXT
        } ,
        price:{
            type: dataTypes.INTEGER
        } ,
        discount:{
            type: dataTypes.INTEGER
        },
        image:{
            type: dataTypes.STRING
        },
        sectionId:{
            type: dataTypes.INTEGER
        },
        brandId:{
            type: dataTypes.INTEGER
        },
        stateId:{
            type: dataTypes.INTEGER
        },
        collectionId:{
            type: dataTypes.INTEGER
        }
    };
    let config ={
        tableName: "products",
        timestamps: false
    }

    const Products = sequelize.define(alias,cols, config);

    Products.associate= function(models){
        Products.belongsTo(models.Brands,{
            as: "brands",
            foreignKey: "brandId",
        })
    }
    Products.associate= function(models){
        Products.belongsTo(models.Collections,{
            as: "collections",
            foreignKey: "collectionId",
        })
    }
    Products.associate= function(models){
        Products.belongsTo(models.Sections,{
            as: "sections",
            foreignKey: "sectionId",
        })
    }
    Products.associate= function(models){
        Products.belongsTo(models.States,{
            as: "states",
            foreignKey: "stateId",
        })
    }

    return Products
}