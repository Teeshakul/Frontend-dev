let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;
let containsNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Word Count:", words);

if (!containsNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
