// banner.js
$(document).ready(function() {
    $("#hideBtn").click(()=> $(".banner").hide());
    $("#showBtn").click(()=> $(".banner").show());
    $("#slideUpBtn").click(()=> $(".banner").slideUp());
    $("#slideDownBtn").click(()=> $(".banner").slideDown());
    $("#fadeOutBtn").click(()=> $(".banner").fadeOut());
    $("#fadeInBtn").click(()=> $(".banner").fadeIn());

    // Rotate banners every 5 seconds
    let banners = $(".banner");
    let index = 0;
    setInterval(() => {
        banners.fadeOut();
        $(banners[index]).fadeIn();
        index = (index + 1) % banners.length;
    }, 5000);
});
