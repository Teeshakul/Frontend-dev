// coffee.js
// Simulate async coffee process with Promises

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) {
                console.log("Water boiled");
                resolve();
            } else reject("Failed to boil water");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) {
                console.log("Coffee brewed");
                resolve();
            } else reject("Failed to brew coffee");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) {
                console.log("Coffee poured into cup");
                resolve();
            } else reject("Failed to pour coffee");
        }, 1000);
    });
}

// Promise chaining
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(err => console.error("Error:", err));
