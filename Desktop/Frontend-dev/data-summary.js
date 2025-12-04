

let name = "Teesha";          // string
let age = 20;                 // number
let isStudent = true;         // boolean
let subjects = ["JS", "HTML"]; // array
let details = { city: "Mathura", id: 10 }; // object
let score = null;             // null
let notAssigned;              // undefined

console.table({
    name: { value: name, type: typeof name },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    subjects: { value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    details: { value: details, type: typeof details },
    score: { value: score, type: typeof score },
    notAssigned: { value: notAssigned, type: typeof notAssigned }
});
