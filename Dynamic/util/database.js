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


// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(process.env.DB, 'root', process.env.DB_PASSWORD, { dialect: 'mysql', host: 'localhost', logging: false });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/** @type {mongodb.Db} */
let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Kaya:'+process.env.MONGO_PASSWORD+'@cluster0.ixvozhp.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected');
        _db= client.db();
        callback();
    }).catch(err => { 
        console.log(err)
        throw err;
    });
}

const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;