// charCounter.js
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const maxChars = 100;

textarea.addEventListener("input", e => {
    let val = textarea.value;
    if(val.length > maxChars) textarea.value = val.slice(0,maxChars);
    let remaining = maxChars - textarea.value.length;
    counter.textContent = remaining;
    counter.style.color = remaining <= 0 ? "red" : remaining <= 20 ? "yellow" : "black";
});

resetBtn.addEventListener("click", () => {
    textarea.value="";
    counter.textContent=maxChars;
    counter.style.color="black";
});
