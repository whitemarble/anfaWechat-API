const mysql = require('promise-mysql');

const pool = mysql.createPool({
  host: '45.76.208.8',
  user: 'myalpha_admin',
  password: 'Anfa@2016',
  database: 'myalpha_wechat'
})


  
module.exports = {pool}