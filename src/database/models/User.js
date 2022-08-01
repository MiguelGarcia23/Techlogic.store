module.exports = (sequelize, dataTypes) =>{
    let alias= "Users"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING   
        } ,
        lastName:{
            type: dataTypes.STRING
        } ,
        email:{
            type: dataTypes.STRING,
            unique: true
        } ,
        password:{
            type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        },
        rolId:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }

    const Users = sequelize.define(alias,cols, config);

    Users.associate= function(models){
        Users.belongsTo(models.Rols,{
            as: "rols",
            foreignKey: "rolId",
        })
    }

    return Users;
}