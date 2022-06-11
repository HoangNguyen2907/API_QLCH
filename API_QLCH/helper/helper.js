const bcrypt = require("bcryptjs")

function hash_password(password) {
    var hash = bcrypt.hashSync(password, 10);
    return hash
}
function check_password(password, hash_password){
    return bcrypt.compareSync(password, user.password)
}
module.exports={
    hash_password: hash_password
}
