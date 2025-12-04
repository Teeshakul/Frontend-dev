"use strict";

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const pass = document.getElementById("password");

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    const phoneReg = /^[0-9]{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;

    validateField(name, nameReg, "Name must contain alphabets only");
    validateField(email, emailReg, "Invalid email format");
    validateField(phone, phoneReg, "Phone must be 10 digits");
    validateField(pass, passReg, "Password must contain uppercase, number, special char");
}

function validateField(input, regex, msg) {
    if (!regex.test(input.value)) {
        input.style.border = "2px solid red";
        alert(msg);
    } else {
        input.style.border = "2px solid green";
    }
}
