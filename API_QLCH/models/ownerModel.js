const Sequelize = require('sequelize');
const db = require('./db');

const ownerModel = db.define('owner',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    birthday: {
        type: Sequelize.DATE
    },
    avatar: {
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
    },
    {
        freezeTableName: true,
        timestamps: false,
}); 
module.exports = ownerModel