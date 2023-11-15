const { DataTypes } = require('sequelize')
const sequelize=require('../../Common/dbconnection')
const user=sequelize.define('user',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        unique:true,
        type:DataTypes.STRING,
        allowNull:false,
        validate:{isEmail:true}
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    },{
        
            timestamps:true,
            paranoid:true
        
    
   
})

module.exports =user