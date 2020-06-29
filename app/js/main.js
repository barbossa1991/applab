$(function () {

    $(document).ready(function() {
        $('.switch').click(function() {
            $('.switch').toggleClass('active');
        });
    });

    $('.map-block__slider').slick({
        infinite: false,
        prevArrow: '<button type="button" class="slick-btn slick-stick slick-prev"><div class="arrow-prev"></div></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><div class="arrow-next"></div></button>',
    });

});