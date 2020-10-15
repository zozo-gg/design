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


	$('.dropdown__trigger').on('click',  function() {
		$(this).toggleClass('active');
		$(this).siblings('.dropdown').slideToggle(350);
	});

	$('.dropdown__item-trigger').on('click',  function() {
		$(this).toggleClass('active');
		$(this).siblings('.dropdown').slideToggle(350);
	});


	$('.tabs__btn').on('click',function(event) {
		var 	$this = $(this),
				tabContainer = $this.closest('.tabs-container'),
				tabContentItem = tabContainer.find('.tab-item'),
				ndx = $this.index(),
				reqItem = tabContentItem.eq(ndx);

		$this.addClass('active')
			.siblings()
			.removeClass('active');

		tabContentItem.removeClass('active');
		reqItem.addClass('active');
	});

	if ( $(window).width() < 992) {
		$('.server').removeClass('active');

		$('.server__trigger').on('click', function(event) {

			if (!$(this).closest('.server').hasClass('is_active')) {
				$('.server').removeClass('is_active')
				$(this).closest('.server').addClass('is_active');
			} else {
				$(this).closest('.server').removeClass('is_active');
			}
		});

	}

	$('.specials__trigger').on('click', function(event) {
		$(this).siblings('.specials__list').slideToggle(350).toggleClass('active');;
		$(this).toggleClass('active');
	});


	$('.top-players__title').on('click', function(event) {
		if ( $(window).width() < 575) {
			event.preventDefault();
			$(this).siblings('.monitoring__players').slideToggle(350).toggleClass('active');;
			$(this).toggleClass('active');
		}
	});




	// function headerFixedToggle() {
		
	// 	var headerDesktop = document.querySelector('.header'),
	// 		headerSourceBottom = 60;

	//    if ($(window).width() > 991) {
	//    	 if (headerDesktop.classList.contains('header_fixed') && window.pageYOffset < headerSourceBottom) {
	//         headerDesktop.classList.remove('header_fixed');
	//     } else if (window.pageYOffset > headerSourceBottom) {
	//         headerDesktop.classList.add('header_fixed');
	//     }
	//    }

	// }

	// headerFixedToggle();

	// // window scroll

	// $(window).on('scroll', function() {
	// 	headerFixedToggle();
	// });



	$('.variant__btn').on('click',function(event) {
		var 	$this = $(this),
				tabContainer = $this.closest('.variant'),
				tabContentItem = tabContainer.find('.tab__content'),
				ndx = $this.index(),
				reqItem = tabContentItem.eq(ndx);

		$this.addClass('active')
			.siblings()
			.removeClass('active');

		tabContentItem.removeClass('active');
		reqItem.addClass('active');
	});


	$('.mon-tabs__btn').on('click',function(event) {
		var 	$this = $(this),
				tabContainer = $this.closest('.mon-tabs'),
				tabContentItem = tabContainer.find('.mon-tabs__item'),
				ndx = $this.index(),
				reqItem = tabContentItem.eq(ndx);

		$this.addClass('active')
			.siblings()
			.removeClass('active');

		tabContentItem.removeClass('active');
		reqItem.addClass('active');
	});



});