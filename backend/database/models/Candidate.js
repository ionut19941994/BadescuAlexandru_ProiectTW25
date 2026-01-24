const { DataTypes } = require("sequelize"); 
const { sequelize } = require("../server"); 

const Candidate = sequelize.define("Candidate", { 
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
    fullName: DataTypes.STRING, 
    position: DataTypes.STRING, 
    company: DataTypes.STRING, 
    linkedinUrl: DataTypes.STRING, 
    notes: DataTypes.STRING, 
}); 

module.exports = Candidate;

const User = require("./User"); 
Candidate.belongsTo(User, { foreignKey: "userId" }); 
User.hasMany(Candidate, { foreignKey: "userId" });