// const { Sequelize } = require('sequelize');
// const sequelize = require('../util/database');

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// });

const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;

class Product {
  constructor(title, price, description, imageUrl, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.userId = userId;
  }

  async save() {
    const db = getDb();
    try {
      const result= await db.collection('products').insertOne(this);
      console.log(result);
      return result;
    } catch (err) {
      return console.log(err);
    }
  }

  static async fetchAll() {
    const db = getDb();
    try {
      const products = await db.collection('products').find().toArray();
      console.log(products);
      return products;
    } catch (err) {
      return console.log(err);
    }
  }

  static async findById(prodId) {
    const db = getDb();
    try {
      // If you would like to use find() example => find({_id: prodId}).next()
      const product = await db.collection('products').findOne({ _id: new ObjectId(prodId) });
      console.log(product);
      return product;
    } catch (err) {
      console.log(err);
    };
  }

  static async update(prodId,updateDoc) {
    const db = getDb();
    try {
      const product = db.collection('products').updateOne({ _id: new ObjectId(prodId) },updateDoc);
      console.log(product);
      return product;
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteById(prodId){
    const db = getDb();
    try {
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(prodId) });
      console.log('DELETED');
      return result;
    } catch (err) {
      return console.log(err);
    }
  }
}



module.exports = Product;

