module.exports = (sequelize, dataTypes) =>{
    let alias= "States"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stateName:{
            type: dataTypes.STRING
        }
    };
    let config ={
        tableName: "states",
        timestamps: false
    }

    const States = sequelize.define(alias,cols, config);

States.associate = function(models){
     States.hasMany(models.Products,{
        as: "products",
        foreignKey: "stateId"
    })
}
    return States;
}