const Sequelize = require('sequelize');
const db = require('./db');
const storeModel = require('./storeModel')
const employeesModel = require('./employeesModel')
const contractModel = db.define('contract',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    storestatus: {
        type: Sequelize.BOOLEAN
    },
    employeesstatus: {
        type: Sequelize.BOOLEAN
    },
    },
    {
        freezeTableName: true,
        timestamps: false,
}); 

contractModel.belongsTo(storeModel,{foreignKey:'storeid'})
contractModel.belongsTo(employeesModel,{foreignKey:'employeesid'})
module.exports = contractModel
