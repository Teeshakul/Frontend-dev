// employeeStatus.js
function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/employees", true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            const table = document.getElementById("employeeTable");
            table.innerHTML = "";
            employees.forEach(emp => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${emp.name}</td>
                    <td><input type="checkbox" ${emp.status==="active" ? "checked" : ""}></td>
                `;
                const toggle = row.querySelector("input");
                toggle.addEventListener("change", function() {
                    const prevStatus = emp.status;
                    emp.status = toggle.checked ? "active" : "inactive";

                    const patchXhr = new XMLHttpRequest();
                    patchXhr.open("PATCH", `/employees/${emp.id}`, true);
                    patchXhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
                    patchXhr.onload = function() {
                        if(patchXhr.status !== 200) {
                            emp.status = prevStatus;
                            toggle.checked = prevStatus==="active";
                            alert("Failed to update status");
                        }
                    };
                    patchXhr.send(JSON.stringify({status: emp.status}));
                });
                table.appendChild(row);
            });
        } else alert("Failed to load employees");
    };
    xhr.send();
}

loadEmployees();
