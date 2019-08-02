jQuery(document).ready(function ($) {
    $(window).resize(function () {
        var socialHeight = $('.social-icons').outerHeight();
        $('.social-icons').css('margin-top', -(socialHeight / 2));
    }).resize();
});