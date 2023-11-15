const DataTypes = require("sequelize");
const sequelize = require("../../Common/dbconnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    department:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = student;
