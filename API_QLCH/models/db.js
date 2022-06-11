const Sequelize = require('sequelize')
require("dotenv").config();

module.exports = new Sequelize({
    
    database: 'qlch',
    username: 'postgres',
    password: 'hoang2907',
    host: 'localhost',  
    port: '5432',
    dialect:'postgres'
  }); 