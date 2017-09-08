const jwt = require('jsonwebtoken');
const {pool}  = require('../async-db');
const bcrypt = require('bcrypt');

const selectUser = async(id) => {
    let sql = 'SELECT * from `USER_ADMIN` where `user_id` = ?'
    let dataList = await pool.query( sql,[id] )
    return dataList
}

const secretkey = "asidfu%^yg23987rgu%ykgvqw";

module.exports = async (data) =>{
    let result = await selectUser(data.username);
    let body ={
        code: 404,
        token: "",
        message: "User not found"
    };
    if(result.length === 1){
        if(bcrypt.compareSync(data.password, result[0].user_pass)){
            body.code = 200;
            body.token = jwt.sign({ username: data.username, role: result[0].role }, secretkey);
            body.message = "Successfully logged in!";
        }else{
            body.code = 401;
            body.token = "";
            body.message = "Authentication failed";
        }

    }
    //console.log(body);
    return body;
}