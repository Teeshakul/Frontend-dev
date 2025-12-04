// debugEventLoop.js
// Predicted Output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");
setTimeout(()=> console.log("Timeout callback"),0);
Promise.resolve().then(()=> console.log("Promise callback"));
console.log("Script end");

// Explanation:
// Promises are microtasks → execute before macrotasks (setTimeout)
