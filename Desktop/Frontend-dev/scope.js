// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000; // local variable

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);
}

// Testing effect of isPermanent
calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus is still:", bonus); // showing global remains unchanged
