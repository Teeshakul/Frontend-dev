

Array.prototype.myMap = function(callback) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// Demonstration
const arr = [1,2,3];
const doubledArr = arr.myMap(num => num * 2);
console.log(doubledArr); // [2,4,6]
