"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)(\d{2})$/;

        if (!reg.test(code)) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        const percent = Number(code.match(/\d+/)[0]);
        return this.getTotal() * (1 - percent / 100);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);

console.log("Final Total (with SAVE20):", cart.applyCoupon("SAVE20"));
