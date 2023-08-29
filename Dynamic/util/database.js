// const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: process.env.DB,
//     password: process.env.DB_PASSWORD
// });

// const getProductsFromDB = async function getProductsFromDB() {
//     const [rows] = await pool.query("SELECT * FROM products");
//     return rows
// }

// module.exports = pool.promise();


const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB, 'root', process.env.DB_PASSWORD, { dialect: 'mysql', host: 'localhost', logging: false });

module.exports = sequelize;