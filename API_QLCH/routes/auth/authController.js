const ownerDAO = require('../../models/ownerDAO')
const employeesDAO = require('../../models/employeesDAO')
const helper = require('../../helper/helper');
const { hash_password } = require('../../helper/helper');

exports.registerEmployees = async(req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const password = req.body.password;
    const avatar = req.body.avatar;
    const sex = req.body.sex; 
    const isverified = false;
    const emailCheck = await employeesDAO.findByEmail(email);
    const phoneCheck = await employeesDAO.findByPhone(phonenumber);
    if(emailCheck != null){
        res.status(500).send({ message: "Email already exists" });
    }
    else if(phoneCheck != null){
        res.status(500).send({ message: "Phone already exists" });
    }
    else{
        NewEmployees = {
            name: name,
            phonenumber: phonenumber,
            email: email,
            password: helper.hash_password(password),
            avatar: avatar,
            sex: sex,
            isverified: isverified
        }
        employeesDAO.create(NewEmployees)
        .then(NewEmployees=>{
            console.log(NewEmployees)
            res.status(500).send({ message: "Sign up success" })})
        .catch(err =>{
            res.sendStatus(500).send(err)
        })
    }
};

exports.registerOwner = async(req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const password = req.body.password;
    const birthday = req.body.birthday;
    const avatar = req.body.avatar;
    const sex = req.body.sex;
    const isverified = false;
    const emailCheck = await ownerDAO.findByEmail(email);
    const phoneCheck = await ownerDAO.findByPhone(phonenumber);
    if(emailCheck != null){
        res.status(500).send({ message: "Email already exists" });
    }
    else if(phoneCheck != null){
        res.status(500).send({ message: "Phone already exists" });
    }
    else{
        Newowner = {
            name: name,
            phonenumber: phonenumber,
            email: email,
            password: hash_password(password),
            birthday: birthday,
            avatar: avatar,
            sex: sex,
            isverified: isverified
        }
        ownerDAO.create(Newowner)
        .then(Newowner=>{
            console.log(Newowner)
            res.status(500).send({ message: "Sign up success" })})
        .catch(err =>{
            console.log('err: '+ err)
            res.sendStatus(500)
        })
    }
}
exports.loginEmployees = async(req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = await employeesDAO.findByEmail(username);
    if(email != null){
        
    }
    const phonenumber = await employeesDAO.findByPhone(username);
}