
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
 
    host : 'localhost',
    user: 'root',
    password : '123',
    database: 'data_collection',
    port:'3306' ,
    multipleStatements: true
  })


module.exports = pool;