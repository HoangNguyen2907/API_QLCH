var express = require('express');
var router = express.Router();
const owner = require('../models/ownerModel')
const employeesModel = require('../models/employeesModel')
/* GET home page. */
router.get('/', function(req, res) {
  owner.findAll().then(data=>{
    console.log(data);
    res.sendStatus(200);
  }).catch(err=>console.log(err))
});
router.get('/employees', function(req, res) {
  employeesModel.findAll().then(data=>{
    console.log(data);
    res.sendStatus(200);
  }).catch(err=>console.log(err))
});

module.exports = router;
