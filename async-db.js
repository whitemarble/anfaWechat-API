const mysql = require('promise-mysql');

const pool = mysql.createPool({
  host: '45.76.196.36',
  user: 'nebulahu_admin',
  password: 'WorldFence73',
  database: 'nebulahu_epayment'
})


  
module.exports = {pool}