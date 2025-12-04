// multiStepForm.js
const steps = document.querySelectorAll(".step");
let current = 0;

function showStep(index){
    steps.forEach((s,i)=> s.style.display = i===index ? "block":"none");
}
showStep(current);

document.querySelectorAll(".nextBtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const input = steps[current].querySelector("input");
        if(!input.value){ alert("Fill input"); return; }
        current = Math.min(steps.length-1,current+1);
        showStep(current);
        if(current === steps.length-1){
            document.getElementById("summary").textContent = Array.from(steps).map(s=>s.querySelector("input").value).join(", ");
        }
    });
});

document.querySelectorAll(".backBtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        current = Math.max(0,current-1);
        showStep(current);
    });
});
