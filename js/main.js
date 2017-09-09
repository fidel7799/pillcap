// MEAN MENU (MOBILE MENU)
(function($) {
    'use strict';

    // MOBILE MENU
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "767",
        meanMenuClose: "<i class='fa fa-times'></i>",
        meanExpand: "<i class='icofont icofont-plus'></i>",
        meanContract: "<i class='icofont icofont-minus'></i>",
    });


    // SIDEBAR MENU
    $('.extra-menu-wrapper > a,.extra-menu-close').click(function(e) {
        $('.extra-menu').toggleClass("open");
        e.preventDefault();
    });


    // COUNTER UP
    $('.counter').counterUp();


    // MAP AREA HEIGHT ACCORDONG TO PARENT SECTION
    $("#map").css({ 'height': ($("#contact-section").height() + 'px') });


    // TOOLTOP FOR PROJECT SHARE
    $('[data-toggle="tooltip"]').tooltip();


    // MOUSE MOVING BACKGTOUND
    $('#background-1').mouseParallax({
        moveFactor: 2
    });

    $('#background-2').mouseParallax({
        moveFactor: 10
    });

    $('#background-3').mouseParallax({
        moveFactor: 7
    });

    $('#background-4').mouseParallax({
        moveFactor: 1
    });

    $('#background-5').mouseParallax({
        moveFactor: 3
    });

    $('#background-6').mouseParallax({
        moveFactor: 1
    });

    $('#background-7').mouseParallax({
        moveFactor: 3
    });

    $('#background-8').mouseParallax({
        moveFactor: 10
    });

    $('#background-9').mouseParallax({
        moveFactor: 5
    });

    $('#background-10').mouseParallax({
        moveFactor: 1
    });

    $('#background-11').mouseParallax({
        moveFactor: 1
    });

    $('#background-12').mouseParallax({
        moveFactor: 5
    });

    $('#background-13').mouseParallax({
        moveFactor: 1
    });


    // SLIDER CAROUSEL
    $('.slider-wrapper').slick({
        arrows: false,
        dots: true,
        loop: true,
        speed: 800,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000
    });


    // TESTIMONIAL CAROUSEL
    $('.testimonial-carousel').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });


    // TESTIMONIAL STYLE 2 CAROUSEL
    $('.testimonial-carousel-2').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }, {
            breakpoint: 481,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });


    // TESTIMONIAL STYLE 3 CAROUSEL
    $('.testimonial-carousel-3').slick({
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // BLOG CAROUSEL
    $('.blog-carousel').slick({
        dots: false,
        speed: 300,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 2,
                dots: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });


    // 8.FEATURED CLIENTS CAROUSEL
    $('.featured-clients-list').slick({
        dots: false,
        speed: 600,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });


    // PORTFOLIO DETAILS SLIDER
    $('.portfolio-project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.project-slider-nav'
    });

    $('.project-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio-project-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });


    // 5.MAGNIFIC POPUP
    $('.preview-icon').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


    // YOUTUBE VIDEO BACKGROUND
    $('#video-background').YTPlayer({
        videoId: '74kPEJWpCD4',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            origin: window.location.origin
        }
    });

})(jQuery);


// PORTFOLIO SECTION MASONARY
(function($) {
    'use strict';

    // PORTFOLIO ACTIVATION
    $('#portfolio-section').imagesLoaded(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // PORTFOLIO FILTERING ACTIVATION
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // FILTER MENU ACTIVE CLASS ADDITION
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.load-more-btn').on('click', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('#portfolio-section .portfolio-load-more').append('<a class="btn btn-blue" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

})(jQuery);


// BLOG PAGE MASONRY
(function($) {
    'use strict';

    $('.blog-page').imagesLoaded(function() {
        var $grid = $('.blog-post-wrapper').isotope({
            itemSelector: '.blog-post',
            percentPosition: true,
        });
    });

})(jQuery);


(function($) {
    'use strict';

    // COMING SOON COUNTDOWN
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
                '<div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES.</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS.</p></span></div>'
            ));
        });
    });

})(jQuery);
