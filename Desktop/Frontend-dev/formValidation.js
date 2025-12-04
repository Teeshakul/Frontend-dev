// formValidation.js
$(document).ready(function() {
    $("#registerBtn").click(function() {
        let valid = true;
        const name = $("#name").val();
        const email = $("#email").val();
        const password = $("#password").val();

        if(!name){ valid=false; $("#name").css("border","2px solid red"); } else $("#name").css("border","");
        if(!email || !email.includes("@")){ valid=false; $("#email").css("border","2px solid red"); } else $("#email").css("border","");
        if(password.length<8){ valid=false; $("#password").css("border","2px solid red"); } else $("#password").css("border","");

        if(valid) alert("Registration successful!");
    });
});
