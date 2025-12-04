// themeSwitcher.js
document.querySelectorAll(".themeBtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        document.body.setAttribute("class", btn.dataset.theme);
        document.body.setAttribute("data-theme", btn.dataset.theme);
    });
});
