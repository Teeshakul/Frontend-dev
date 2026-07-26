

let expenses = [5000, 1200, 8000, 3000, 1500]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, v) => sum + v, 0);
let average = total / expenses.length;

let tax = total * 0.10; // 10% tax
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
