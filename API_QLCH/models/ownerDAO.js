const ownerModel = require('./ownerModel')

var ownerDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    findByEmail:findByEmail,
    findByPhone:findByPhone,
}
function findAll(){
    return ownerModel.findAll();
}
function findById(id){
    return ownerModel.findByPk(id)
} 
function findByEmail(email){
    return ownerModel.findOne({where:{email: email}})
}
function findByPhone(phonenumber){
    return ownerModel.findOne({where:{phonenumber: phonenumber}})
}
function create(owner){
    return ownerModel.create(Newowner)
}

module.exports = ownerDAO;