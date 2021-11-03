const mysql = require('mysql2/promise')

module.exports = mysql.createPool({
  host: "localhost",
  user: 'root',
  database: 'cep_lookup',
  password: 'secret',
  port: 3306
})