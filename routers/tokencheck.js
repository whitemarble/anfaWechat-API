const jwt = require('jsonwebtoken');
const secretkey = require("../secretkey").secretkey;


module.exports = (token) =>{
    console.log(token)
    try{
        let decoded = jwt.verify(token, secretkey);
        console.log(decoded)
        return {
            code: 200,
            message: "Token valid"
        }
    }catch(err){
        console.log(err)
        return {
            code: 401,
            message: "Token invalid or expired"
        };
    }

    return "213"
    
}