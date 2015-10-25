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
	var errMsg = $('.error-message');
	var successMsg = $('.text-success');


    $('.cover-livetext-submit').click(function() {
    	console.log("Button pushed");
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
                $.post("http://instant-esports-static.herokuapp.com/text_download/",
                    JSON.stringify({"phone_number": telInput.intlTelInput("getNumber")}),
                    function (data) {
                    	telInput.hide();
                    	errMsg.hide();
                    	$('.cover-livetext-submit').hide();
                    	$('.text-success').show();
                    	$('.flag-container').hide();
                    }
                );
            } else {
              telInput.addClass("error");
              errMsg.show();
            }
        }
    })

    telInput.blur(function() {
	  if ($.trim(telInput.val())) {
	    if (telInput.intlTelInput("isValidNumber")) {
	    	telInput.removeClass("error");
	    	errMsg.hide();
	    } else {
	      telInput.addClass("error");
	      errMsg.show();
	    }
	}
});

});