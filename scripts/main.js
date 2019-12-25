$('.burger').click(function() {
	$(this).toggleClass('open');
	$('.menu').toggleClass('open');

	$('html').css('overflow', $('.menu').hasClass('open') ? 'hidden' : 'visible');

	if ($('.menu').hasClass('open')) {
		setTimeout(() => {
			$('.about, .offer, .portfolio, .prices, .contact, footer').css('display', 'none');
		}, 400);
	} else {
		$('.about, .offer').css('display', 'flex');
		$('.portfolio, .prices, .contact, footer').css('display', 'block');
	}
});