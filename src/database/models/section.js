module.exports = (sequelize, dataTypes) =>{
    let alias= "Sections"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sectionName:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "sections",
        timestamps: false
    }

    const Sections = sequelize.define(alias,cols, config);

    Sections.associate = function(models){
        Sections.hasMany(models.Products,{
            as: "products",
            foreignKey: "sectionId"
        })
    }

    return Sections;
}