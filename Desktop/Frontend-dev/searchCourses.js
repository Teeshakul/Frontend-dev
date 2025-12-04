// searchCourses.js
$(document).ready(function() {
    $("#searchInput").keyup(function() {
        const val = $(this).val().toLowerCase();
        let count = 0;
        $(".course").each(function() {
            const text = $(this).text().toLowerCase();
            if(text.includes(val)){
                $(this).show().css("background-color","yellow");
                count++;
            } else $(this).hide();
        });
        $("#matchCount").text(count + " courses matched");
        if(val==="") $(".course").show().css("background-color","");
    });
});
