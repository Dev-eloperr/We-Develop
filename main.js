$(document).ready(function() {
    var banner_height = $("#responsive-navbar").height();
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var currScrollTop = $(this).scrollTop();
        if (scroll >= banner_height && currScrollTop > lastScrollTop) {
            $("#responsive-navbar").hide("fast");
        } else {
            $("#responsive-navbar").show("fast");
        }
        lastScrollTop = currScrollTop;

    });


    $("#arr-img").hover(function(){
        $(this).toggleClass("bounce2");
        $(this).toggleClass("bounce");
    });

});