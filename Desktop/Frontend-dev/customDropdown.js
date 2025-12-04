// customDropdown.js
const btn = document.getElementById("dropdownBtn");
const options = document.getElementById("dropdownOptions");

btn.addEventListener("click", ()=> options.style.display = options.style.display==="block"?"none":"block");

options.querySelectorAll("li").forEach(li=>{
    li.addEventListener("click", ()=>{
        btn.textContent=li.textContent;
        options.style.display="none";
    });
});

document.addEventListener("click", e=>{
    if(!btn.contains(e.target) && !options.contains(e.target)){
        options.style.display="none";
    }
}, true);
