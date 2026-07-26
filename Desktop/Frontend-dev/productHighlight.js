// productHighlight.js
$(document).ready(function() {
    $(".product").click(function() {
        $(this).css("background-color", "#ffff99"); // Highlight on click
    });

    $(".product").hover(
        function() { $(this).find(".details").show(); },
        function() { $(this).find(".details").hide(); }
    );

    $(".favorite").click(function() {
        $(this).toggleClass("selected");
    });

    $("[data-discount]").css("border", "2px solid green");

    $(".product").click(function() {
        if($(this).data("stock") === "out") {
            alert("Product out of stock!");
        }
    });
});
