// teamDirectory.js
$(document).ready(function() {
    $(".manager").click(function() {
        $(this).siblings(".employee").css("background-color", "#cce5ff");
    });

    $(".employee").hover(function() {
        $(this).next(".contactInfo").show();
    }, function() {
        $(this).next(".contactInfo").hide();
    });

    $(".department").click(function() {
        $(this).children(".employee").css("background-color","#ffe6cc");
    });

    $(".employee").each(function(){
        if(Math.random()<0.1) $(this).siblings().css("border","2px solid red");
    });

    $(".team").click(function(){
        $(this).find(".employee").toggle();
    });
});
