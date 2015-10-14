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

	$('.cover-download-playstore').click(function(event) {
		track = ga('send', {
		  hitType: 'event',
		  eventCategory: 'Store',
		  eventAction: 'button press',
		  eventLabel: 'Play Store'
		});
		console.log("track playstore press");
	});

	$('.cover-download-appstore').click(function(event) {
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Store',
		  eventAction: 'button press',
		  eventLabel: 'App Store'
		});
		console.log("track appstore press");
	});

});