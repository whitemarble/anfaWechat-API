const jwt = require('jsonwebtoken');
const {pool}  = require('../async-db')

async function selectUser(username){
  let sql = 'SELECT * FROM `wp_users` WHERE `user_login` = ?';
  let dataList = await pool.query(sql,[username]);
  return dataList;
}


module.exports = async (ctx) =>{
  let data = await selectUser('admin');
  console.log(data[0].user_pass)
  
    if (ctx.request.body.password === 'password') {
      ctx.status = 200;
      ctx.body = {
        token: jwt.sign({ role: 'admin' }, 'A very secret key'), //Should be the same secret key as the one used is ./jwt.js
        message: "Successfully logged in!"
      };
    } else {
      ctx.status = ctx.status = 401;
      ctx.body = {
        message: "Authentication failed"
      };
    }
    return ctx;
}