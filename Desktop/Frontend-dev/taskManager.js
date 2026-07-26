// taskManager.js
$(document).ready(function() {
    function loadTasks(filter="") {
        $("#taskList").html("Loading...");
        $.ajax({
            url: `/tasks${filter}`,
            method: "GET",
            success: function(tasks) {
                $("#taskList").empty();
                tasks.forEach(task => {
                    $("#taskList").append(`
                        <li>
                            <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
                            ${task.title} (Priority: ${task.priority})
                        </li>
                    `);
                });
            }
        });
    }

    loadTasks();

    $("#filter").change(function() {
        const val = $(this).val();
        const query = val ? `?priority=${val}` : "";
        loadTasks(query);
    });

    $(document).on("change","#taskList input[type='checkbox']",function(){
        const id = $(this).data("id");
        const completed = $(this).is(":checked");
        $.ajax({
            url: `/tasks/${id}`,
            method: "PATCH",
            contentType:"application/json",
            data: JSON.stringify({completed}),
            error: function(){ alert("Failed to update task"); }
        });
    });
});
