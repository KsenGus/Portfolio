$(document).ready(function(){
    $('.promo__hamburger').on('click', function(){
        $('.menu').fadeIn('slow');
    });
    $('.menu__close').on('click', function(){
        $('.menu').fadeOut('slow');
    });
    $('.button_white, .button_black, .button_big').on('click', function (){
        $('.background, .form').fadeIn('slow');
    });
    $('.form__cross').on('click', function (){
        $('.background, .form').fadeOut('slow');
    })
    $(".promo__item, .promo__link").on('click', function()
    {
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            })
    })
});

