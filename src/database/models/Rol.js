module.exports = (sequelize, dataTypes) =>{
    let alias= "Rols"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rolName:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "rols",
        timestamps: false
    }

    const Rols = sequelize.define(alias,cols, config);

    Rols.associate = function(models){
        Rols.hasMany(models.Users,{
            as: "users",
            foreignKey: "rolId"
        })
    }
    
    return Rols;
}