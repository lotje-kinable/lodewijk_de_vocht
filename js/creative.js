(function ($) {
	'use strict'; // Start of use strict





	// $('#tooltip').tooltip(options)


	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, '') ==
			this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length
				? target
				: $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 72
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
		//$('.navbar-collapse').addClass('collapse');
		// $('.navbar-collapse')
		// 	.removeClass('show')
		// 	.addClass('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 75
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($('#mainNav').offset().top > 100) {
			$('#mainNav').addClass('navbar-scrolled');
			//console.log('help');
			$('#navbarResponsive > ul > li.nav-item.dropdown.show > div')
				.removeClass('show')
				.addClass('hide');
		} else {
			$('#mainNav').removeClass('navbar-scrolled');
			//console.log('NO');
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	$(function () {
		$('[data-toggle="popover"]').popover()
	})

	// Magnific popup calls
	// $('#portfolio').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0, 1]
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	// 	}
	// });
})(jQuery); // End of use strict
