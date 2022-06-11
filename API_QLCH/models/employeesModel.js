const Sequelize = require('sequelize');
const db = require('./db');

const employeesModel = db.define('employees',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING 
    },
    phonenumber: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    isverified: {
        type: Sequelize.BOOLEAN
    },
    addressid:{
        type: Sequelize.INTEGER
    }
    },
    {
        freezeTableName: true,
        timestamps: false,
}); 
module.exports = employeesModel