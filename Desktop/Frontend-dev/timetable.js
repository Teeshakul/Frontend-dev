// timetable.js
$(document).ready(function() {
    function loadTimetable(day){
        $("#timetable").html("Loading...");
        $.ajax({
            url:`/timetable?day=${day}`,
            method:"GET",
            success:function(classes){
                $("#timetable").empty();
                if(classes.length === 0){
                    $("#timetable").append("<p>No classes today.</p>");
                } else {
                    classes.forEach(c => {
                        $("#timetable").append(`<div>${c.time}: ${c.subject} (${c.faculty})</div>`);
                    });
                }
            }
        });
    }

    $("#daySelect").change(function(){ loadTimetable($(this).val()); });
    loadTimetable($("#daySelect").val());
});
