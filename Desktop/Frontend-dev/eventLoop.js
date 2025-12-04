// eventLoop.js
console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0); // macrotask
Promise.resolve().then(() => console.log("Microtask: Promise.then")); // microtask

console.log("Synchronous log");
console.log("End");

// Explanation:
// Microtasks (Promise.then) run before macrotasks (setTimeout) even if declared after.
// Output order: Start → Synchronous log → End → Microtask → Macrotask
