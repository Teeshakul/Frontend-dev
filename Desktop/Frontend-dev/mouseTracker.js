// mouseTracker.js
const box = document.getElementById("mouseBox");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", e=>{
    coords.textContent=`X: ${e.clientX}, Y: ${e.clientY}`;
});

box.addEventListener("dblclick", e=>{
    const dot = document.createElement("div");
    dot.style.width="5px"; dot.style.height="5px";
    dot.style.background="red"; dot.style.position="absolute";
    dot.style.left=e.offsetX+"px"; dot.style.top=e.offsetY+"px";
    box.appendChild(dot);
});
