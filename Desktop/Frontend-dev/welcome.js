// welcome.js
$(document).ready(function() {
    const greeting = $("#greeting");
    const welcomeMsg = $("#welcomeMsg");

    // 1. Personalized greeting
    const hour = new Date().getHours();
    if(hour < 12) greeting.text("Good Morning!");
    else if(hour < 18) greeting.text("Good Afternoon!");
    else greeting.text("Good Evening!");

    // 2. Change greeting button
    $("#changeGreetingBtn").click(function() {
        greeting.text("Keep pushing forward, you got this!");
    });

    // 3. Toggle welcome message visibility
    $("#toggleWelcomeBtn").click(function() {
        welcomeMsg.toggle();
    });

    // 4. Alert on greeting click
    greeting.click(function() {
        alert("Greeting clicked!");
    });
});
