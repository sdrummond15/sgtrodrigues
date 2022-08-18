jQuery(document).ready(function ($) {
    $('.carousel').carousel({
        interval: 6000,
        ride: true
    });

    //PADDING PARA O BANNER
    $(window).on('resize', function () {
        $('#slide').css('padding-top', $('#menu').height());
    }).trigger('resize');

    //EVENTO PARA SCROLL SLOW MENU E LOGO
    $('.logo, .main-menu, #responsive').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('#responsive ul').hide();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    $(window).on('resize', function () {
        if (!$("#menuresp button").is(':visible')) {
            $('#responsive ul').hide();
        }
    }).trigger('resize');


    $("#menuresp button").click(function () {
        $('#responsive ul').slideToggle();
    });

    $(".responsive ul li a").click(function () {
        $('#responsive ul').slideToggle();
    });

    
});

jQuery(window).scroll(function ($) {
    console.log('PAGE: ' + jQuery(window).scrollTop());
    console.log('HEADER: ' + jQuery('header').offset().top);
});

