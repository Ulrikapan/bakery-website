// JavaScript Document 消除連結虛線
jQuery(function ($) {
    $("a").focus(function () {
        $(this).blur();
    });
});

$(document).ready(function() {
    var header = $("#shan_header"),
        language = $(".language_switch");

    if ($(window).width() > 992) {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 40) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
                language.removeClass('active');
            }
        });
    } else {
    	header.addClass('sticky');
    }
});