// subscription.js
$(document).ready(function() {
    $("#subscribeBtn").click(function() {
        $(".notifications").prop("disabled", false);
        $("#message").text("Subscribed successfully!");
    });

    $("#unsubscribeBtn").click(function() {
        $(".notifications").prop("disabled", true);
        $("#message").text("Unsubscribed successfully!");
    });

    $("#addTopicBtn").on("click", function() {
        $("#topics").append('<button class="topic">New Topic</button>');
    });

    $("#removeTopicBtn").off("click").click(function() {
        $(".topic:last").remove();
    });
});
