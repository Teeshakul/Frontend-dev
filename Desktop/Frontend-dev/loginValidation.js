"use strict";

function validateLogin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("password").value;

    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if (!userReg.test(user)) return alert("Username must be 5+ chars");
    if (!passReg.test(pass)) return alert("Weak Password");

    alert("Login Successful!");
}
