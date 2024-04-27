// const { Sequelize } = require('sequelize');
// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     name: Sequelize.STRING,
//     email: Sequelize.STRING,
// });


const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    async save() {
        const db = getDb();
        try {
            const result= await db.collection('users').insertOne(this);
            console.log('USER CREATED');
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users').find({_id:  new ObjectId(userId)}).next();
    }
}

module.exports = User;