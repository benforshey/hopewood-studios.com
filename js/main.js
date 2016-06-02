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

    /*!
     * jquery.lightbox.js
     * https://github.com/duncanmcdougall/Responsive-Lightbox
     * Copyright 2013 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
     */
    !function(a){"use strict";a.fn.lightbox=function(b){var c={margin:50,nav:!0,blur:!0,minSize:0},d={items:[],lightbox:null,image:null,current:null,locked:!1,caption:null,init:function(b){d.items=b,d.selector="lightbox-"+Math.random().toString().replace(".","");var e="lightbox-"+Math.floor(1e5*Math.random()+1);d.lightbox||(a("body").append('<div id="'+e+'" class="lightbox" style="display:none;">'+'<a href="#" class="lightbox-close lightbox-button"></a>'+'<div class="lightbox-nav">'+'<a href="#" class="lightbox-previous lightbox-button"></a>'+'<a href="#" class="lightbox-next lightbox-button"></a>'+"</div>"+'<div href="#" class="lightbox-caption"><p></p></div>'+"</div>"),d.lightbox=a("#"+e),d.caption=a(".lightbox-caption",d.lightbox)),d.items.length>1&&c.nav?a(".lightbox-nav",d.lightbox).show():a(".lightbox-nav",d.lightbox).hide(),d.bindEvents()},loadImage:function(){c.blur&&a("body").addClass("blurred"),a("img",d.lightbox).remove(),d.lightbox.fadeIn("fast").append('<span class="lightbox-loading"></span>');var b=a('<img src="'+a(d.current).attr("href")+'" draggable="false">');a(b).load(function(){a(".lightbox-loading").remove(),d.lightbox.append(b),d.image=a("img",d.lightbox).hide(),d.resizeImage(),d.setCaption()})},setCaption:function(){var b=a(d.current).data("caption");b&&b.length>0?(d.caption.fadeIn(),a("p",d.caption).text(b)):d.caption.hide()},resizeImage:function(){var b,e,f,g,h;e=a(window).height()-c.margin,f=a(window).outerWidth(!0)-c.margin,d.image.width("").height(""),g=d.image.height(),h=d.image.width(),h>f&&(b=f/h,h=f,g=Math.round(g*b)),g>e&&(b=e/g,g=e,h=Math.round(h*b)),d.image.width(h).height(g).css({top:(a(window).height()-d.image.outerHeight())/2+"px",left:(a(window).width()-d.image.outerWidth())/2+"px"}).show(),d.locked=!1},getCurrentIndex:function(){return a.inArray(d.current,d.items)},next:function(){return d.locked?!1:(d.locked=!0,d.getCurrentIndex()>=d.items.length-1?a(d.items[0]).click():a(d.items[d.getCurrentIndex()+1]).click(),void 0)},previous:function(){return d.locked?!1:(d.locked=!0,d.getCurrentIndex()<=0?a(d.items[d.items.length-1]).click():a(d.items[d.getCurrentIndex()-1]).click(),void 0)},bindEvents:function(){a(d.items).click(function(b){if(!d.lightbox.is(":visible")&&(a(window).width()<c.minSize||a(window).height()<c.minSize))return a(this).attr("target","_blank"),void 0;var e=a(this)[0];b.preventDefault(),d.current=e,d.loadImage(),a(document).on("keydown",function(a){27===a.keyCode&&d.close(),39===a.keyCode&&d.next(),37===a.keyCode&&d.previous()})}),d.lightbox.on("click",function(a){this===a.target&&d.close()}),a(d.lightbox).on("click",".lightbox-previous",function(){return d.previous(),!1}),a(d.lightbox).on("click",".lightbox-next",function(){return d.next(),!1}),a(d.lightbox).on("click",".lightbox-close",function(){return d.close(),!1}),a(window).resize(function(){d.image&&d.resizeImage()})},close:function(){a(document).off("keydown"),a(d.lightbox).fadeOut("fast"),a("body").removeClass("blurred")}};a.extend(c,b),d.init(this)}}(jQuery);


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



