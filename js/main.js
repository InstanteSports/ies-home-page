jQuery(document).ready(function($) {
	
	$(".content").fadeIn('slow', function() {
		
	});
	$('.timer').countdown('2015/07/25', function(event) {
		$(this).html(event.strftime('%-D DAYS'));
	  });
	$('.hour').countdown('2015/07/25', function(event) {
		$(this).html(event.strftime('%H : %M : %S'));
	  });
});