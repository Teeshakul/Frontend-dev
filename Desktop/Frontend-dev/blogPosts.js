// blogPosts.js
$(document).ready(function() {
    $("#addPost").click(()=> $("#posts").append('<li>New Post</li>'));
    $("#prependPost").click(()=> $("#posts").prepend('<li>Featured Post</li>'));
    $("#removeLastPost").click(()=> $("#posts li:last").remove());
    $("#addTags").click(()=> $("#posts li").before('<span class="tag">Tag</span>'));
    $("#highlightKeyword").click(()=> $("#posts li:contains(\"Important\")").css("background-color","lightgreen"));
});
