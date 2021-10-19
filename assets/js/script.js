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
	$(".banner").on("mousemove", function (position) {
		let moveX = position.pageX / 30;
		let moveY = position.pageY / 30;
		$(".banner .shape").css({
			"transform": `translateX(${moveX}px) translateY(${moveY}px)`
		})
	});

    /*  Community quote slider */
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

    /*  Community preview slider */
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

    /* veno box init */
    $('.venobox').venobox({
        bgcolor: '#ffffff',
        spinner: 'three-bounce',
    });

})(jQuery);