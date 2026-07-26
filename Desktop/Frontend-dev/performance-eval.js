

let marks = [85, 70, 90, 88, 95];

let total = marks.reduce((sum, m) => sum + m, 0);
let percentage = (total / (marks.length * 100)) * 100;

let hasFail = marks.some(m => m < 35);

if (hasFail) {
    console.log("Detained (Failed in one or more subjects)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
