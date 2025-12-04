// faq.js
$(document).ready(function() {
    $(".question").click(function() {
        $(this).next(".answer").toggle();
    });

    $(".question").hover(
        function() { $(this).css("color", "blue"); },
        function() { $(this).css("color", "black"); }
    );

    $(".question").dblclick(function() {
        $(".answer").hide();
    });

    $(".answer input").focus(function() {
        $(this).parent(".answer").prev(".question").css("background-color","yellow");
    }).blur(function() {
        $(this).parent(".answer").prev(".question").css("background-color","");
    });
});
