(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        preLoader();
		headerHeightFixer();
    });

	/* Bootstrap form validation init */
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	}, false);

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},100);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
    function headerHeightFixer(){
		$('.header--primary').before('<div class="header-height-fix"></div>');
    	$('.header-height-fix').css('height', $('header').innerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item, .nav-item .primary-btn").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Banner Animation function */
	$(".parallax-banner").on("mousemove", function (parallaxMove) {
		const parallaxX = parallaxMove.pageX / 30;
		const parallaxY = parallaxMove.pageY / 15;
		$(".parallax-banner .shape").css({
			"transform": `translateX(${parallaxX}px) translateY(${parallaxY}px)`
		})
	});

	/* Veno box init */
	(function(){
		$('.venobox').venobox({
			bgcolor: '#ffffff',
			spinner: 'three-bounce',
		});
	})();

	/* Community quote slider */
	(function(){
		$(".community__quote-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 500,
			arrows: true,
			prevArrow: '<button class="slick__arrows slick__arrows--left border-0 rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"><span class="appname-icon-left"></span></button>',
			nextArrow: '<button class="slick__arrows slick__arrows--right border-0 rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"><span class="appname-icon-right"></span></button>',
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			infinite: true,
			fade: true,
			  cssEase: 'linear',
			asNavFor: '.community__preview-slider'
		});
	})();
    
	/* Community preview slider */
	(function(){
		$(".community__preview-slider").slick({
			asNavFor: '.community__quote-slider',
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			arrows: false,
			dots: false,
			centerMode: true,
			centerPadding: '0px',
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			infinite: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
	})();

	/* Particles JS init */
	(function(){
		particlesJS('sub-banner__canvas',
			{
				"particles": {
					"number": {
						"value": 50,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
						}
					},
					"opacity": {
						"value": 0.2,
						"random": true,
						"anim": {
							"enable": false,
						}
					},
					"size": {
						"value": 12,
						"random": true,
						"anim": {
							"enable": true,
							"speed": 6,
							"size_min": 0.5,
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.2,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 2,
						"direction": "none",
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": false,
						},
						"resize": true
					},
					"modes": {
						"repulse": {
							"distance": 10
						},
						"remove": {
							"particles_nb": 20
						}
					}
				},	
			}
		);
	})();
	
})(jQuery);