"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Mouse", 500, "Electronics"),
    new Product(3, "Shoes", 1500, "Fashion")
];

const expensive = products.filter(p => p.price > 1000);
console.log("Products above 1000:");
console.log(expensive);
