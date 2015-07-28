$(document).on('ready', function () {

//    Modernizr Fallbacks
    if (!Modernizr.svg || !Modernizr.inlinesvg) {
//        hide the containing element—not sure what will be left on no SVG support
        $('.logo-container--bounding').addClass('removed');
        $('.chart-container--bounding').addClass('removed');
//        append the PNG fallback into the positioning container
        $('.logo-container--position').append('<img class="logo-fallback" src="images/logo.png" alt="Logo for HopeWood Studio.">');
        $('.chart-container--position').append('<img class="chart-fallback" src="images/chart.png" alt="Chart detailing semester duration and tuition payment options.">');
    }

//    Google Maps
    var initializeMap = function () {
        var southBoston = new google.maps.LatLng(36.699550, -78.899748),
            danville = new google.maps.LatLng(36.584961, -79.396431),
            center = new google.maps.LatLng(36.639427, -79.145814);

        var mapOptions = {
            zoom: 10,
            center: center
        };
        var map = new google.maps.Map(document.querySelector('.map-canvas'), mapOptions);
        var firstMarker = new google.maps.Marker({
            position: southBoston,
            map: map,
            title: 'Hopewood Studio'
        });
        var secondMarker = new google.maps.Marker({
            position: danville,
            map: map,
            title: 'Hopewood Studio'
        });
    };

    $('.js-map-init').on('click', function (event) {
        event.preventDefault();
        initializeMap();
        $('.map-overlay').addClass('removed');
        $('.map-container--ratio').removeClass('removed');
    });

//    Smooth Scrolling
    $('.js-scroll').on('click', function (event) {
        event.preventDefault();
        var reference = this.hash;
        var targetLocation = $(reference).offset().top;

        $('html, body').animate({
            scrollTop: targetLocation
        }, 300);

    });

//    LightBox
    $('.lightbox-bio-photo').lightbox();
    $('.lighbox-performance-gallery').lightbox();

//    Off-Canvas Nav
    $('.js-nav-open').on('click', function (event) {
        event.preventDefault();
        var mainNav = $('.main-nav');
        mainNav.removeClass('js-close-nav');
        mainNav.addClass('js-open-nav');
    });
    $('.js-nav-close').on('click', function (event) {
        event.preventDefault();
        var mainNav = $('.main-nav');
        mainNav.removeClass('js-open-nav');
        mainNav.addClass('js-close-nav');
    });

});



