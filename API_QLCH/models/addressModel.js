const Sequelize = require('sequelize');
const db = require('./db');

const addressModel = db.define('address',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    housenumber: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    ward: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    },
    {
        freezeTableName: true,
        timestamps: false,
}); 
module.exports = addressModel