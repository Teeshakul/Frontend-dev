function Product(name, price){ this.name=name; this.price=price; }
Product.prototype.applyDiscount = function(percent){ return this.price*(1-percent/100); }

// Demo
const p1=new Product("Laptop",1000);
const p2=new Product("Phone",500);
const p3=new Product("Tablet",300);

console.log(p1.applyDiscount(10), p2.applyDiscount(20), p3.applyDiscount(5));
