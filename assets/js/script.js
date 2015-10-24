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

});