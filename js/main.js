$(document).ready(function() { 


	$('.burger').on('click', function() {
		$('.menu').animate({left: 0},350);
		$('.bg-element').addClass('active');
		$('html').addClass('is_fixed');
	});	

	$('.close-menu, .bg-element').on('click', function() {
		$('.menu').animate({left: '-100%'},350);
		$('.bg-element').removeClass('active');
		$('html').removeClass('is_fixed');
	});



	function headerFixedToggle() {
		
		var headerDesktop = document.querySelector('.header'),
			headerSourceBottom = 60;

	   if ($(window).width() > 991) {
	   	 if (headerDesktop.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
	        headerDesktop.classList.remove('header_fixed');
	    } else if (window.pageYOffset > headerSourceBottom) {
	        headerDesktop.classList.add('header_fixed');
	    }
	   }

	}

	headerFixedToggle();

	// window scroll

	$(window).on('scroll', function() {
		headerFixedToggle();
	});







});