"use strict";

function bookTicket() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = Number(document.getElementById("seats").value);

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^@]+@[^@]+\.[a-z]{2,}$/;

    if (!nameReg.test(name)) return alert("Invalid Name");
    if (!emailReg.test(email)) return alert("Invalid Email");
    if (seats < 1 || seats > 10) return alert("Seats must be 1 to 10");

    const ticket = { name, email, seats };
    console.log("Booking Confirmed:", ticket);
}
