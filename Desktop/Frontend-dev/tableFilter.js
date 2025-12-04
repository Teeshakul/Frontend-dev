// tableFilter.js
const tableInput = document.getElementById("tableSearch");
const tableRows = document.querySelectorAll("#studentTable tbody tr");

tableInput.addEventListener("input", ()=>{
    const val = tableInput.value.toLowerCase();
    let found=false;
    tableRows.forEach(row=>{
        const text = row.textContent.toLowerCase();
        if(text.includes(val)){
            row.style.display="";
            found=true;
        } else row.style.display="none";
    });
    document.getElementById("noResult").style.display = found?"none":"table-row";
});
