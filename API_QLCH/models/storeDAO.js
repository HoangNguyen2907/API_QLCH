const storeModel = require('./storeModel')
const ownerDAO =  require('./ownerDAO')
var storeDAO = {
    create: create,
    findByOwnerId: findByOwnerId,
    findAll:findAll
}
function findByOwnerId(ownerid){
    return storeModel.findAll({where:{ownerid: ownerid}})
}
function findAll(){
    return storeDAO.findAll();
}
function create(store){
    return storeModel.create(store)
}

module.exports = storeDAO;