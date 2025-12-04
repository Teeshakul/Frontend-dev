// multiJquery.js
var jQ1 = $.noConflict(true); // Version 1
var jQ2 = $.noConflict(true); // Version 2

jQ1(document).ready(function(){
    jQ1("#carousel").addClass("active");
});

jQ2(document).ready(function(){
    jQ2("#modalBtn").click(function(){ jQ2("#modal").show(); });
    jQ2(".tooltip").hover(function(){ jQ2(this).show(); }, function(){ jQ2(this).hide(); });
});
