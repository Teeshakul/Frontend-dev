

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Execute callback
}

// Demonstration
greetUser("Tee", showEndMessage);
