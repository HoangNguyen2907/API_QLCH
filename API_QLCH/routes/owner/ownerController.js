const storeDAO = require('../../models/storeDAO')
const storeModel = require('../../models/storeModel')
const ownerModel = require('../../models/ownerModel');
const employeesModel = require('../../models/employeesModel')
const contractModel = require('../../models/contractModel')
const db = require('../../models/db')
exports.getAllStore = async(req, res) => {
    const ownerId = req.params.ownerID;
    const data = await storeModel.findAll({
        include:[{
            model: ownerModel,
            as: 'owner'
        }],
        where:{ownerid:ownerId}
    })
    res.send(data)
    // const ownerId = req.params.ownerID;
    // const store = await storeDAO.findByOwnerId(ownerId);
    // if(store){
    //     res.status(200).send(store);
    // }
    // else{
    //     res.send({message: "No stores found"});
    // }
} 
exports.NewStore = async(req, res) =>{
    const ownerId = req.params.ownerID;
    const name = req.body.name;
    const logo = req.body.logo;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const addressid = req.body.addressID;
    const newStore = {
        name: name,
        phonenumber: phonenumber,
        logo: logo,
        email: email,
        ownerid: ownerId
    }
    console.log(newStore)
    store = await storeDAO.create(newStore)
    .then(store =>{
        res.status(200).send(store)
    })
}

exports.getEmployee = async(req, res) =>{
    const storeid = (req.params.storeID);
    const contract = await contractModel.findAll({
        where:{storeid: storeid, 
            storestatus: true, 
            employeesstatus: true}})
    var employees = []
    for( i in contract){
       const employee = await employeesModel.findAll({
            where:{id: contract[i].employeesid}
        })
        // console.log("this",employee.length)
        if(employee != null )
            employees.push(employee)
    }
    res.status(200).send(employees)
}
exports.getJobrequire = async(req, res) =>{
    const ownerid = ( req.params.ownerID);
    const store = await storeDAO.findByOwnerId(ownerid);
    var jobrequires = []
    for(i in store){
        const jobrequire = await contractModel.findAll({
            where:{
                storeid: store[i].id,
                storestatus: false,
                employeesstatus: true
            }
        })
        if(jobrequire.length != 0 )
            jobrequires.push(jobrequire)
    }
    res.send(jobrequires)
}
exports.acceptRequire = async(req, res) =>{
    const contractid = req.params.contractID; 
    const contract = await contractModel.update({storestatus: true},
        {where:{
            id: contractid
        }})
    res.status(200).send(contract)
}
exports.terminateContract = async(req, res) =>{
    const contractid = req.params.contractID;
    const contract = await contractModel.destroy({where:{id: contractid}})
    res.status(200).send({message:"done!"})
}

exports.searchByPhone = async(req, res) => {
    const phone = req.query.phonenumber;
    if(phone){
        const rs = await employeesModel.findAll({where: {phonenumber: phone}})
        if(rs.length !=0)
            res.send(rs)
        else{
            res.send({message: "Can't find someone with the phone number " + phone })
        }
    }
    else{
        res.send({message: "please enter phone number"})
    }
}

exports.Jobsuggest = async(req, res) =>{
    const storeid = req.params.storeID;
    const employeesid = req.params.employeesID;
    const newContract = {
        storeid: storeid,
        employeesid: employeesid,
        storestatus: true,
        employeesstatus: false
    }
    try {
        console.log(newContract)
        const contract = await contractModel.create(newContract)
        res.status(200).send({message: 'Successful!'})
    } catch (error) {
        res.status(500)
    }
    
    
}