

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Double each number
const doubled = applyOperation([1,2,3,4], n => n*2);
console.log("Doubled:", doubled);

// Square each number
const squared = applyOperation([1,2,3,4], n => n**2);
console.log("Squared:", squared);
