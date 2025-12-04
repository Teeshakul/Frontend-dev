// productManager.js
document.addEventListener("DOMContentLoaded", () => {
    const productInput = document.getElementById("productInput");
    const addBtn = document.getElementById("addProductBtn");
    const productList = document.getElementById("productList");

    addBtn.addEventListener("click", () => {
        const value = productInput.value.trim();
        if(!value) return;
        const li = document.createElement("li");
        li.innerHTML = `<span class="productName">${value}</span>
                        <button class="editBtn">Edit</button>
                        <button class="deleteBtn">Delete</button>`;
        productList.appendChild(li);
        productInput.value="";
    });

    productList.addEventListener("click", e => {
        const li = e.target.closest("li");
        if(e.target.classList.contains("deleteBtn")) {
            li.remove();
        } else if(e.target.classList.contains("editBtn")) {
            const span = li.querySelector(".productName");
            const input = document.createElement("input");
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            input.focus();
            const save = () => {
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
            };
            input.addEventListener("blur", save);
            input.addEventListener("keydown", ev => { if(ev.key==="Enter") save(); });
        }
    });
});
