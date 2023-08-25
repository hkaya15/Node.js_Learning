const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: process.env.DB,
    password: process.env.DB_PASSWORD
});

const getProductsFromDB = async function getProductsFromDB() {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows
}

module.exports = pool.promise();
