'use strict';
(function ($) {

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    $('.slider').slick({
        slidesToShow: 2,
        slide: "div",
        prevArrow: ".prev",
        nextArrow: ".next",
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
            ]

    });

})(jQuery);


