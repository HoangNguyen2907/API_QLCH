const Sequelize = require('sequelize');
const db = require('./db');
const ownerModel = require('../models/ownerModel')
const storeModel = db.define('store',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phonenumber: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    },
    addressid:{
        type: Sequelize.INTEGER
    }
    },
    {
        freezeTableName: true,
        timestamps: false,
}); 
storeModel.belongsTo(ownerModel,{foreignKey: 'ownerid'});
// ownerModel.hasMany(storeModel,{foreignKey: 'ownerid'})
module.exports = storeModel