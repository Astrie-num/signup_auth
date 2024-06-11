const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'astrie123',
  database: 'signup_auth'
});

module.exports = pool.promise();
