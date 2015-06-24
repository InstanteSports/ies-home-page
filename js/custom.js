/* --------------------------------------------

Page Loader

-------------------------------------------- */

$(window).load(function() {

	// 'use strict';

	// $(".loader-item").delay(700).fadeOut();

	// $("#pageloader").delay(800).fadeOut("slow");
	
/* --------------------------------------------

Carousel-slider

-------------------------------------------- */	
	
	'use strict';
	
	$(".owl-demo").owlCarousel({

		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [991, 1],
		itemsTablet : [768, 1],
		itemsTabletSmall : false,
		itemsMobile : [479, 1],

		lazyLoad : true,

		autoPlay: false,

		navigation : false

	});
	
	
	
/* --------------------------------------------

Text Slider Home Page

-------------------------------------------- */

	  'use strict';



      $('.text-slider').flexslider({

        animation: "slide",

		selector: ".slide-text li",

		controlNav: false,

		directionNav: false,

		slideshowSpeed: 4000,

		touch: true,

		useCSS: false,

		direction: "vertical",

        before: function(slider){        

		 var height = $('.text-slider').find('.flex-viewport').innerHeight();

		 $('.text-slider').find('li').css({ height: height + 'px' });

        }		

      });


});


/* --------------------------------------------

Home Background Super Slider 

-------------------------------------------- */

$('#slides').superslides({

	animation: 'fade',

});





jQuery(document).ready(function($) {	

	'use strict';	

	/* --------------------------------------------

		Animated Items

	-------------------------------------------- */



	$('.animated').appear(function() {

		var elem = $(this);

		var animation = elem.data('animation');

		if ( !elem.hasClass('visible') ) {

			var animationDelay = elem.data('animation-delay');

			if ( animationDelay ) {



				setTimeout(function(){

					elem.addClass( animation + " visible" );

				}, animationDelay);



			} else {

				elem.addClass( animation + " visible" );

			}

		}

	});

	

});






/* --------------------------------------------

 Scroll Navigation

-------------------------------------------- */	

$(function() {

	'use strict';	

	jQuery('.scroll').bind('click', function(event) {

		var $anchor = jQuery(this);

		var headerH = jQuery('#navigation').outerHeight();

			jQuery('html, body').stop().animate({					

				scrollTop : jQuery($anchor.attr('href')).offset().top  + 2 + "px"

			}, 1200, 'easeInOutExpo');



		event.preventDefault();

	});

});

/* --------------------------------------------

 Active Navigation-[

-------------------------------------------- */



	jQuery('body').scrollspy({ 

		target: '#topnav',

		offset: 95

	})

 

(function($) {

	'use strict';

	$.fn.countTo = function(options) {

		// merge the default plugin settings with the custom options

		options = $.extend({}, $.fn.countTo.defaults, options || {});

	

		// how many times to update the value, and how much to increment the value on each update

		var loops = Math.ceil(options.speed / options.refreshInterval),

			increment = (options.to - options.from) / loops;

	

		return $(this).each(function() {

			var _this = this,

				loopCount = 0,

				value = options.from,

				interval = setInterval(updateTimer, options.refreshInterval);

	

			function updateTimer() {

				value += increment;

				loopCount++;

				$(_this).html(value.toFixed(options.decimals));

	

				if (typeof(options.onUpdate) == 'function') {

					options.onUpdate.call(_this, value);

				}

	

				if (loopCount >= loops) {

					clearInterval(interval);

					value = options.to;

	

					if (typeof(options.onComplete) == 'function') {

						options.onComplete.call(_this, value);

					}

				}

			}

		});

	};

	

	$.fn.countTo.defaults = {

		from: 0,  // the number the element should start at

		to: 100,  // the number the element should end at

		speed: 1000,  // how long it should take to count between the target numbers

		refreshInterval: 100,  // how often the element should be updated

		decimals: 0,  // the number of decimal places to show

		onUpdate: null,  // callback method for every time the element is updated,

		onComplete: null,  // callback method for when the element finishes updating

	};

	

})(jQuery); 


			
			
jQuery(document).ready(function() { 

	

/* --------------------------------------------

Fixed Menu on Scroll

-------------------------------------------- */

	'use strict';

	$("#sticky-section").sticky({topSpacing:0});

  });
	

		
$(document).ready(function() { 



	// Menus hide after click --  mobile devices

	'use strict';

	$('nav li a').click(function () {

		 $('.navbar-collapse').removeClass('in');

	});


	
	'use strict';

	if (Modernizr.touch) {

		// show the close overlay button


		// handle the adding of hover class when clicked

		$(".img").click(function(e){

			if (!$(this).hasClass("hover")) {

				$(this).addClass("hover");

			}

		});


	} else {

		// handle the mouseenter functionality

		$(".img").mouseenter(function(){

			$(this).addClass("hover");

		})

		// handle the mouseleave functionality

		.mouseleave(function(){

			$(this).removeClass("hover");

		});

	}
	

});	   





/* -------------------------------------------- 

 Blog Flex Slider

-------------------------------------------- */

$('.flexslider').flexslider({

	animation: 'fade',

	slideshow: false,

	animationLoop: false,

	controlNav: false

});

