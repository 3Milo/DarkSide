$('.burger').click(function() {
	$(this).toggleClass('open');
	$('.menu').toggleClass('open');

	$('html').css('overflow', $('.menu').hasClass('open') ? 'hidden' : 'visible');
});