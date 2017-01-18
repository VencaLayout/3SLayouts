// ==== Scroll Menu Bar and Logo ==== //

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.desktopNav').addClass("topOfPage");
             $(".megamenu").css("margin-top","22px");
        } else {
            $('.desktopNav').removeClass("topOfPage");
            $(".megamenu").css("margin-top","0");
        }

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.desktopNavInfo').addClass("topOfPageInfo");
        } else {
            $('.desktopNavInfo').removeClass("topOfPageInfo");
        }
    });
});
