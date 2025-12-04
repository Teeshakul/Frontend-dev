"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let item of apiData) {
    let num = Number(item);

    if (!isNaN(num) && item !== " " && item !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(item);
    }

    console.log({
        original: item,
        number: num,
        boolean: Boolean(item),
        string: String(item)
    });
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);
