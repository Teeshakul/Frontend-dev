// registration.js
$(document).ready(function(){
    $("#registerBtn").click(async function(e){
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const password = $("#password").val();

        try {
            const {data: existing} = await axios.get(`/users?email=${email}`);
            if(existing.length > 0){
                alert("Email already registered.");
                return;
            }
            await axios.post("/users",{name,email,password});
            alert("Registration successful!");
        } catch(err){
            alert("Error processing registration");
        }
    });
});
