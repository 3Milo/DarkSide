const switchMenu = () => {
	$('.burger').toggleClass('open');
	$('.menu').toggleClass('open');

	if ($('.menu').hasClass('open')) {
		setTimeout(() => {
			$('.about, .offer, .portfolio, .prices, .contact, footer').css('display', 'none');
		}, 400);
	} else {
		$('.about, .offer').css('display', 'flex');
		$('.portfolio, .prices, .contact, footer').css('display', 'block');
	}
};

const chooseSection = (text) => {
	if (text == 'O MNIE') return $('.about');
	if (text == 'OFERTA') return $('.offer');
	if (text == 'PORTFOLIO') return $('.portfolio');
	if (text == 'CENNIK') return $('.prices');

	return $('.contact');
};

$('.burger').click(() => {
	let viewHeight = document.documentElement.clientHeight;
	$('.burger').css("pointer-events", "none");

	$('.menu').css('height', viewHeight);
	$('.menu .flexbox').css('height', viewHeight * 0.8);
	$('.menu .flexbox').css('margin', viewHeight * 0.1);

	switchMenu();

	setTimeout(() => $('.burger').css("pointer-events", "auto"), 450);
});

$('.menu .flexbox div').click(el => {
	let text = el.target.textContent,
		scroll = chooseSection(text);

	switchMenu();

	$(window).scrollTop(scroll.offset().top);
});

$('.options div').click(el => {
	let text = el.target.textContent,
		scroll = chooseSection(text);

	$(window).scrollTop(scroll.offset().top);
});

$('.arrow').click(el => {
	$(window).scrollTop(0);
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