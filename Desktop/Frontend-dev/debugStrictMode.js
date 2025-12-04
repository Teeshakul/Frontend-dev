"use strict";

function showMessage() {
    // greeting = "Welcome"; ❌ Error in strict mode (undeclared variable)

    let greeting = "Welcome"; // ✅ fixed
    console.log(greeting);
}

showMessage();

// Explanation: strict mode prevents accidental global variable creation.
