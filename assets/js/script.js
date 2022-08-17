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
    $('.logo, .main-menu, #menuresp').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    if($('header').scrollTop() >= $('#banner').height() + $('header').height()){
        console.log('erqwer');
    }
    console.log($('header').offset().top);
    console.log($('#banner').height() + $('header').height());

    $(window).on('resize', function () {
        if (!$("#menuresp button").is(':visible')) {
            $('#menuresp ul').hide();
        }
    }).trigger('resize');


    $("#menuresp button").click(function () {
        $('#menuresp ul').slideToggle();
    });

    $("#menuresp ul li a").click(function () {
        $('#menuresp ul').slideToggle();
    });

    
});

jQuery(window).scroll(function ($) {
    console.log('PAGE: ' + jQuery(window).scrollTop());
    console.log('HEADER: ' + jQuery('header').offset().top);
});

