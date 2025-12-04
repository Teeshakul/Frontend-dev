"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw new Error("Null transaction");
        if (!t.id || t.amount === undefined) throw new Error("Missing data");
        if (t.amount < 0) throw new Error("Negative amount");

        valid.push(t);
    } catch (err) {
        invalid.push({ t, error: err.message });
    }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
