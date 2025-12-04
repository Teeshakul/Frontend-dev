"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(containerId) {
        let html = "<form id='dynamicForm'>";
        this.fields.forEach(field => {
            html += `<label>${field.label}</label>
                     <input type='${field.type}' name='${field.label}' /><br/>`;
        });
        html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
        document.getElementById(containerId).innerHTML = html;
    }
}

function getFormData() {
    const inputs = document.querySelectorAll("#dynamicForm input");
    const data = {};

    inputs.forEach(inp => {
        data[inp.name] = inp.value;
    });

    console.log("Form Data:", data);
}
