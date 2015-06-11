jQuery(document).ready(function($) {
	
	$('.timer').countdown('2015/07/30', function(event) {
	    $(this).html(event.strftime('%-D DAYS %H:%M:%S'));
	  });
});