$('.burger').click(() => {
	$('.burger').toggleClass('open');
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

$('.options div').click(el => {
	let text = el.target.textContent,
		scroll;

	if (text == 'O MNIE') {
		scroll = $('.about');
	} else if (text == 'OFERTA') {
		scroll = $('.offer');
	} else if (text == 'PORTFOLIO') {
		scroll = $('.portfolio');
	} else if (text == 'CENNIK') {
		scroll = $('.prices');
	} else {
		scroll = $('.contact');
	}

	$("html, body").animate({ scrollTop: scroll.offset().top }, 100);
});

$('.arrow').click(el => {
	$("html, body").animate({ scrollTop: 0 }, 100);
});

$(window).on('scroll', () => {
	if ($(this).scrollTop() < 40) {
		$('.navbar').addClass('show');
		$('.arrow').removeClass('show');
	} else {
		$('.navbar').removeClass('show');
		$('.arrow').addClass('show');
	}
});