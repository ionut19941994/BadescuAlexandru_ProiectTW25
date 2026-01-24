const { DataTypes } = require("sequelize"); 
const { sequelize } = require("../server"); 

const User = sequelize.define("User", { 
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
    email: { type: DataTypes.STRING, unique: true }, 
    password: DataTypes.STRING, 
}); 

module.exports = User;