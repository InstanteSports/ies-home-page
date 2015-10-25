$(document).ready(function(){
	
	setTimeout(function(){
		$('#cover-shot-nexus').removeClass('inactive');
		setTimeout(function(){
			$('#cover-shot-iphone').removeClass('inactive');
		}, 100);
	}, 300);

	$('.slide-content').waypoint(function(direction){
		if (direction == 'down') {
			$(this).siblings('.slide-shot').removeClass('inactive');
			$(this).removeClass('inactive');
		} else {
			$(this).siblings('.slide-shot').addClass('inactive');
			$(this).addClass('inactive');
		}
	}, {offset: '75%'});

	$('.cover-livetext-input').intlTelInput();
	$('.cover-livetext-input').intlTelInput("loadUtils", "assets/js/intlTelInput/js/utils.js");

	var telInput = $('.cover-livetext-input');


    $('.cover-livetext-submit').click(function() {
    	console.log("Button pushed");
        if ($.trim(telInput.val())) {
        	console.log(telInput.intlTelInput("isValidNumber"));
        	console.log(telInput.intlTelInput("getNumber"));
            if (telInput.intlTelInput("isValidNumber")) {
            	console.log("Is this working?");
                $.post("http://instant-esports-static.herokuapp.com/text_download/",
                    JSON.stringify({"phone_number": telInput.intlTelInput("getNumber")})
                );
            } else {
              telInput.addClass("error");
            }
        }
    })

    telInput.keydown(function() {
      telInput.removeClass("error");
    });

});