var cycle_count = 1;

function cycle_cover() {
	
	$('.cover-title-feature-post').addClass('cover-title-feature-pre').removeClass('cover-title-feature-post');
	
	if (cycle_count == 5) {
		var current_header = $('.cover-title-feature:nth-child(5)');
		var new_header = $('.cover-title-feature:nth-child(1)');

		// var current_background = $('.cover-background-item:nth-child(5)');
		// var new_background = $('.cover-background-item:nth-child(1)');
	} else {
		var current_header = $('.cover-title-feature:nth-child('+cycle_count+')');
		var new_header = $('.cover-title-feature:nth-child('+(cycle_count+1)+')');

		// var current_background = $('.cover-background-item:nth-child('+cycle_count+')');
		// var new_background = $('.cover-background-item:nth-child('+(cycle_count+1)+')');
	}
	
	current_header.addClass('cover-title-feature-post');
	new_header.removeClass('cover-title-feature-pre');

	// current_background.removeClass('cover-background-active');
	// new_background.addClass('cover-background-active');

	if (cycle_count == 5) {
		cycle_count = 1;
	} else {
		cycle_count++;
	}
}

$(document).ready(function(){

	setTimeout(function(){
		$('body').addClass('ready');
	}, 500);

	setInterval(function(){
		cycle_cover();
	}, 3000);

	$('.cover-livetext-input').intlTelInput();
	$('.cover-livetext-input').intlTelInput("loadUtils", "assets/js/intlTelInput/js/utils.js");

	$('.follow-news-item').waypoint(function(direction){

		if (direction == 'down') {
			$(this).addClass('follow-news-item-active');
		} else {
			$(this).removeClass('follow-news-item-active');
		}

	}, {offset: '90%'});

	$('.follow-games-item').waypoint(function(direction){

		if (direction == 'down') {
			$(this).addClass('follow-games-item-active');
		} else {
			$(this).removeClass('follow-games-item-active');
		}

	}, {offset: '75%'});

	$('.learn-card-item').waypoint(function(direction){

		if (direction == 'down') {
			$(this).addClass('learn-card-item-active');
		} else {
			$(this).removeClass('learn-card-item-active');
		}

	}, {offset: '90%'});

	$('#talk-demo-theater').waypoint(function(direction){

		if (direction == 'down') {
			$('#talk-demo-news').addClass('talk-demo-active');
		}

	}, {offset: '50%', triggerOnce: 'true'});

	$('.talk-demo-selector-item').click(function(){
		var selection = $(this).attr('data-selection');

		$('.talk-demo-selector-active').removeClass('talk-demo-selector-active');
		$(this).addClass('talk-demo-selector-active');

		$('.talk-demo-active').removeClass('talk-demo-active');
		$('#talk-demo-'+selection).addClass('talk-demo-active');

		$('#talk-demo').removeClass('talk-demo-preload');

		if (selection == 'match') {
			$('#talk-demo-theater').addClass('talk-demo-theater-extended');
		} else {
			$('#talk-demo-theater').removeClass('talk-demo-theater-extended');
		}

	});

	$('#learn-carousel').owlCarousel({
		autoWidth: true,
		center: true
	});

	var telInputOne = $('#cover-tel-1');
	var telInputTwo = $('#cover-tel-2');
	var errMsg = $('.error-message');
	var successMsg = $('.text-success');

    $('.cover-livetext-submit').click(function() {
    	console.log("Button pushed");
        if ($.trim(telInputOne.val())) {
            if (telInputOne.intlTelInput("isValidNumber")) {
            	console.log("Valid number");
                $.post("http://instant-esports-static.herokuapp.com/text_download/",
                    JSON.stringify({"phone_number": telInputOne.intlTelInput("getNumber")}),
                    function (data) {
                    	console.log("Success");
                    	telInputOne.hide();
                    	telInputTwo.hide()
                    	errMsg.hide();
                    	$('.cover-livetext-submit').hide();
                    	$('.text-success').show();
                    	$('.flag-container').hide();
                    }
                );
            } else {
              telInputOne.addClass("error");
              errMsg.show();
            }
        }
        if ($.trim(telInputTwo.val())) {
            if (telInputTwo.intlTelInput("isValidNumber")) {
            	console.log("Valid number");
                $.post("http://instant-esports-static.herokuapp.com/text_download/",
                    JSON.stringify({"phone_number": telInputTwo.intlTelInput("getNumber")}),
                    function (data) {
                    	console.log("Success");
                    	telInputOne.hide();
                    	telInputTwo.hide();
                    	errMsg.hide();
                    	$('.cover-livetext-submit').hide();
                    	$('.text-success').show();
                    	$('.flag-container').hide();
                    }
                );
            } else {
              telInputTwo.addClass("error");
              errMsg.show();
            }
        }
    })

    telInputOne.blur(function() {
	  if ($.trim(telInputOne.val())) {
	    if (telInputOne.intlTelInput("isValidNumber")) {
	    	telInputOne.removeClass("error");
	    	errMsg.hide();
	    } else {
	      telInputOne.addClass("error");
	      errMsg.show();
	    }
	}});

	telInputTwo.blur(function() {
	  if ($.trim(telInputTwo.val())) {
	    if (telInputTwo.intlTelInput("isValidNumber")) {
	    	telInputTwo.removeClass("error");
	    	errMsg.hide();
	    } else {
	      telInputTwo.addClass("error");
	      errMsg.show();
	    }
	}});

});