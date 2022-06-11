const employeesModel = require('./employeesModel')

var ownerDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    findByEmail:findByEmail,
    findByPhone:findByPhone,
}
function findAll(){
    return employeesModel.findAll();
}
function findById(id){
    return employeesModel.findByPk(id)
}
function findByEmail(email){
    return employeesModel.findOne({where:{email: email}})
}
function findByPhone(phonenumber){
    return employeesModel.findOne({where:{phonenumber: phonenumber}})
}
function create(employees){
    return employeesModel.create(employees)
}

module.exports = ownerDAO;