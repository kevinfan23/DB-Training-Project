$(document).ready(function() {
	
	// Svg animation
	$('.acm-outline-text').addClass('draw');
	setTimeout(function(){ 
		$('.acm-outline').addClass('fadeOut');
	}, 2000);
	setTimeout(function(){ 
		$('.acm-white').addClass('fadeIn');
	}, 2000);
	
	$(window).scroll(function() {
		if(isElementInViewport($('.quote-image'))) {
			$('.profile').addClass('animated fadeInUp');
			$('.quote-des').addClass('animated fadeInUp');
			console.log('hahs');	
		}
		if(isElementInViewport($('.date'))) {
			$('.date').addClass('animated bounceIn');
		}
	});
});

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height()*0.8;

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}