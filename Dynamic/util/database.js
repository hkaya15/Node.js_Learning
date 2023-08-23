const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: process.env.DB,
    password: process.env.DB_PASSWORD
});

module.exports = pool.promise();