const contractModel = require('../../models/contractModel');

exports.jobrequire = async(req, res) =>{
    const id = req.params.id;
    try {
        const jobrequire = await contractModel.findAll({
            where:{
                employeesid: id, 
                storestatus: false, 
                employeesstatus: true}})
        res.status(200).send(jobrequire)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}
exports.Jobsuggest = async(req, res) =>{
    const id = req.params.id;
    try {
        const Jobsuggest = await contractModel.findAll({
            where:{
                employeesid: id, 
                storestatus: true, 
                employeesstatus: false}})
        res.status(200).send(Jobsuggest)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}
exports.accept = async(req,res) =>{
    const contractid = req.params.contractID;
    try {
        const contract = await contractModel.update({employeesstatus: true},
        {
        where:{
            id: contractid
        }})
        res.status(200).send(contract)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
} 

exports.sendRequire = async(req, res) => {
    const employeesid = req.params.id;
    const storeid = req.params.storeID;
    const newContract = {
        storeid: storeid,
        employeesid: employeesid,
        storestatus: false,
        employeesstatus: true
    }
    try {
        const contract = await contractModel.create(newContract)
        res.status(200).send(contract)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}