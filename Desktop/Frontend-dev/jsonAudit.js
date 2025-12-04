"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];

rawData.forEach((line, index) => {
    try {
        let obj = JSON.parse(line);

        if (!obj.user || !obj.age) throw new Error("Missing keys");

        obj.age = Number(obj.age);

        if (obj.age >= 18) clean.push(obj);
    } catch (err) {
        console.log(`Error at line ${index + 1}:`, err.message);
    }
});

console.log("Clean Data:", clean);
