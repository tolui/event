/*
-----------------------------------------------
Theme: myWedding - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() { 
   "use strict";   
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
}); 
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function () {
    "use strict";

    $("#bgvideo").YTPlayer();
    var $tfront = $(".title-front").hide();
    var $tunder = $(".title-under").hide();
    $tfront.show().arctext({ radius: 250 });
    $tunder.show().arctext({ radius: 180, dir: -1 });

    var content = $("body"),
        navbar = $(".navbar"),
        col = $(".col-transform");

    $(".show-info").on('click', function () {
        if (window.innerWidth > 990) {
            if (content.hasClass('show-content')) {
                col.removeClass('col-md-6').addClass('col-md-12');
                content.removeClass('show-content');
                setTimeout(function () {
                    navbar.removeClass('navbar-open')
                }, 900);
            } else {
                col.removeClass('col-md-12').addClass('col-md-6');
                content.addClass('show-content');
                setTimeout(function () {
                    navbar.addClass('navbar-open')
                }, 300);
            }
        }
    });
    


    /*========== Countdown start ================*/
    var clock;

    clock = $('#countdown').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        minimumDigits: 9,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    var ts = +new Date("December 08, 2022 18:00 GMT+0800");
    var date_now = new Date();
    var seconds = Math.floor((ts - (date_now)) / 1000);
    console.log(seconds);
    clock.setTime(seconds);
    clock.setCountdown(true);
    clock.start();

/*========== Countdown end ================*/

    // Gallery Lightbox
    $(".bearr-gallery-item a").simpleLightbox();   
    
    //Google maps
	//Map
	var map;
	//var odessa = new google.maps.LatLng(46.45879177, 30.73738575);

	var MY_MAPTYPE_ID = 'custom_style';

	function initialize() {


	    //Start options
	    var featureOpts = 
	    [
	    {
	        "featureType": "landscape",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "stylers": [
	            {
	                "hue": "#00aaff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "gamma": 2.15
	            },
	            {
	                "lightness": 12
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 24
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "lightness": 57
	            }
	        ]
	    }
	    ];
	    //END options

	    //END maps options
	    var mapOptions = {
	        zoom: 14,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	        },
	        mapTypeId: MY_MAPTYPE_ID
	    };
	    //END maps options
	    
	    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	    var styledMapOptions = {
	        name: 'Custom Style'
	    };
	    var customMapType_church = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	    map.mapTypes.set(MY_MAPTYPE_ID, customMapType_church);
	    
	    //end marker hotel
	}
	//google.maps.event.addDomListener(window, 'load', initialize);
	//END GOOGLE MAPS  
	
}); 