jQuery(document).ready(function ($) {
    $('.carousel').carousel({
        interval: 6000,
        ride: true
    });

    //PADDING PARA O BANNER
    $(window).on('resize', function () {
        $('#slide').css('padding-top', $('#menu').height());
    }).trigger('resize');

    //PADDING E MARGIN PARA A ANCORA FICAR CERTA
    $("#quem-somos, #nossa-equipe, #o-que-fazemos, #certificacao, #contato").css('padding-top', $('#menu').height() - 1);
    $("#quem-somos, #nossa-equipe, #o-que-fazemos, #certificacao, #contato").css('margin-top', -$('#menu').height() + 1);

    //IGUALANDO O TAMANHO DAS DIVS DE O QUE FAZEMOS
    $(window).on('resize', function () {
        $('#aluminio_multiplexado').css('height', $('#aluminio_nu').innerHeight());
        $('#aluminio_xlpe').css('height', $('#aluminio_nu').innerHeight());
    }).trigger('resize');

    //EVENTO PARA SERVIÇOS DETALHAMENTO SLIDE UP E DOWN
    $('#aluminio_multiplexado button').on('click', function () {
        $('#desc-service ul.aluminio_nu').slideUp("slow", function () {
            if ($("#aluminio_nu button i").hasClass("fa-chevron-up") == true) {
                $("#aluminio_nu button i").removeClass('fa-chevron-up');
            }
        });
        $('#desc-service ul.aluminio_xlpe').slideUp("slow", function () {
            if ($("#aluminio_xlpe button i").hasClass("fa-chevron-up") == true) {
                $("#aluminio_xlpe button i").removeClass('fa-chevron-up');
            }
        });
            $('#desc-service ul.aluminio_multiplexado').slideToggle("slow");
            $("#aluminio_multiplexado button i").toggleClass('fa-chevron-up', 'fa-chevron-down');
    });
    $('#aluminio_nu button').on('click', function () {
        $('#desc-service ul.aluminio_multiplexado').slideUp("slow", function () {
            if ($("#aluminio_multiplexado button i").hasClass("fa-chevron-up") == true) {
                $("#aluminio_multiplexado button i").removeClass('fa-chevron-up');
            }
        });
        $('#desc-service ul.aluminio_xlpe').slideUp("slow", function () {
            if ($("#aluminio_xlpe button i").hasClass("fa-chevron-up") == true) {
                $("#aluminio_xlpe button i").removeClass('fa-chevron-up');
            }
        });
            $('#desc-service ul.aluminio_nu').slideToggle("slow");
            $("#aluminio_nu button i").toggleClass('fa-chevron-up', 'fa-chevron-down');

    });
    $('#aluminio_xlpe button').on('click', function () {
        $('#desc-service ul.aluminio_multiplexado').slideUp("slow", function () {
            if ($("#aluminio_multiplexado button i").hasClass("fa-chevron-up") == true) {
                $("#aluminio_multiplexado button i").removeClass('fa-chevron-up');
            }
        });
        $('#desc-service ul.aluminio_nu').slideUp("slow", function () {
                if ($("#aluminio_nu button i").hasClass("fa-chevron-up") == true) {
                    $("#aluminio_nu button i").removeClass('fa-chevron-up');
                }
        });
            $('#desc-service ul.aluminio_xlpe').slideToggle("slow");
            $("#aluminio_xlpe button i").toggleClass('fa-chevron-up', 'fa-chevron-down');
    });
    //EVENTO PARA SERVIÇOS DETALHAMENTO SLIDE UP E DOWN RESPONSIVO
    $('#aluminio_multiplexado-resp button').on('click', function () {
            $('#desc-aluminio_multiplexado-resp').slideToggle("slow");
            $("#aluminio_multiplexado-resp button i").toggleClass('fa-chevron-up', 'fa-chevron-down');
    });
    $('#aluminio_nu-resp button').on('click', function () {
        $('#desc-aluminio_nu-resp').slideToggle("slow");
        $("#aluminio_nu-resp button i").toggleClass('fa-chevron-up', 'fa-chevron-down');
    });
    $('#aluminio_xlpe-resp button').on('click', function () {
        $('#desc-aluminio_xlpe-resp').slideToggle("slow");
        $("#aluminio_xlpe-resp button i").toggleClass('fa-chevron-up', 'fa-chevron-down');
    });

    //EVENTO PARA SCROLL SLOW MENU E LOGO
    $('.logo, .main-menu, #menuresp').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    //ENVIO DE CONTATO
    $('#btn').click(function (e) {
        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#phone').val();
        var msg = $('#msg').val();
        if (nome.length <= 3) {
            alert('Informe seu nome');
            return false;
        }
        if (email.length <= 5) {
            alert('Informe seu email');
            return false;
        }
        if (IsEmail(email) == false) {
            alert('Informe um e-mail válido');
            return false;
        }
        if (msg.length <= 5) {
            alert('Escreva uma mensagem');
            return false;
        }
        var urlData = "&nome=" + nome + "&email=" + email + "&telefone=" + telefone + "&msg=" + msg;
        $.ajax({
            type: "POST",
            url: 'sendmail.php',
            async: true,
            data: urlData,
            success: function (data) {
                $('#retornoHTML').prepend(data);
            },
            beforeSend: function () {
                $('.loading').fadeIn('fast');
            }, complete: function () {
                $('.loading').fadeOut('fast');
                $("#nome").val("");
                $("#email").val("");
                $("#phone").val("");
                $("#msg").val("");
            }
        });

        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
    });

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

    $(".logo a").click(function () {
        $('#menuresp ul').slideUp();
    });
});

