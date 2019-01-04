'use strict';
(function ($) {

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    $('.slider').slick({
        slidesToShow: 2,
        infinite: false,
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

    $('.js-button').on('click', function () {

        var element = $('.slide.slick-active').first();
        var position = element.data('slick-index');
        var route = $(this).data('route');
        if (route === 'next') {
            var firsElementPosition = position - 1;
            var lastElementPosition = position + 1;

            $('.slide').map(function (index, object) {
                var selector = $(object);


                if (selector.data('slick-index') === firsElementPosition) {
                    selector.addClass('slider__slide--prev');

                }
                if (selector.data('slick-index') === lastElementPosition) {
                    selector.removeClass('slider__slide--prev');
                    selector.removeClass('slider__slide--next');


                }
            })
        } else {
            var firsElementPosition = position + 2;
            var lastElementPosition = position;
            $('.slide').map(function (index, object) {
                var selector = $(object);


                if (selector.data('slick-index') === firsElementPosition) {
                    selector.addClass('slider__slide--next');

                }
                if (selector.data('slick-index') === lastElementPosition) {
                    selector.removeClass('slider__slide--next');
                    selector.removeClass('slider__slide--prev');


                }
            })
        }




    })
})(jQuery);


