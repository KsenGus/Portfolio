$(document).ready(function(){
    $('.carousel__inner').slick({
        arrows: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ],
        prevArrow: '<button type="button" class="slick-prev"><img src = "./img/chevron left solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "./img/chevron right solid.png"></button>'
    });

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
      $(this)
        .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
        .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    $('.item__more').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.item__top').eq(i).css({'display' : 'none'});
        $('.item__list').eq(i).css({'display' : 'block'});
      })
    });
    $('.item__back').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.item__list').eq(i).css({'display' : 'none'});
        $('.item__top').eq(i).css({'display' : 'block'});
      })
    });

    $('[data-modal = consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn();
    });
    $('.button_buy').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__description').text($('.item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $(window).scroll(function(){
      if($(this).scrollTop() > 700){
        $('.up').fadeIn();
      }
      else{
        $('.up').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
      return false;
    })

    
});

