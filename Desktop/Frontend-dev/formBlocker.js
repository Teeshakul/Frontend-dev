// formBlocker.js
const form = document.getElementById("userForm");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let valid=true;

    const name = form.name;
    const email = form.email;
    const pass = form.password;

    if(!name.value){ valid=false; name.style.border="2px solid red"; } else name.style.border="";
    if(!email.value.includes("@")){ valid=false; email.style.border="2px solid red"; } else email.style.border="";
    if(pass.value.length<6){ valid=false; pass.style.border="2px solid red"; } else pass.style.border="";

    if(valid) alert("Form Submitted Successfully");
});
