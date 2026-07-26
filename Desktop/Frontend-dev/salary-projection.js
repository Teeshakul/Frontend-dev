

let currentSalary = 35000;
let incrementRate = 10; // 10% yearly

let table = {};

for (let year = 1; year <= 5; year++) {
    currentSalary += (currentSalary * incrementRate) / 100;
    table[`Year ${year}`] = Math.round(currentSalary);
}

console.table(table);
