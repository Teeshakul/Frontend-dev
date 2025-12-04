let product = " wireless headphones PRO ";

let cleaned = product
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log("Clean Title:", cleaned);
console.log("Length:", cleaned.length);
