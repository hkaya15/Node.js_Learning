const products = [];

module.exports = class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}