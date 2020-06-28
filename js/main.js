function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

	$('.icon-menu').click(function(event) {
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

$(document).ready(function() {
			$('.slider__body').slick({
				arrows:false,
				dots:true,
				adaptiveHeight: true, /*Адаптирует под высоту активной картинки*/
				slidesToShow: 1, 
				slidesToScroll: 1,
				autoplaySpeed:1000,
				accessibility: false,
			});

	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	var header = $(".header"),
		introH = $(".intro").innerHeight(), // высота интро
		scrollOffset = $(window).scrollTop(); //сколько мы проскролили
		windowH = $(window).height();
		wrapperH = $('.wrapper').innerHeight();
		prefooterH = $('.prefooter').innerHeight();
		fixedNone = wrapperH - windowH - prefooterH;


	/* Fixed Header */
	checkScroll(scrollOffset) //чтобы при заходе на страницу выполнялась эта функция

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop(); // Показывет значение, которое проскролленно

		checkScroll(scrollOffset);
	});


		function checkScroll(scrollOffset) {
			if( scrollOffset >=introH && scrollOffset <= fixedNone) {
				header.addClass("fixed");
			} 
			else {
				header.removeClass("fixed");
			}
		}

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top,
			top = $this.offset().top;

		$(".intro--nav li").removeClass("active"),
		$this.addClass('active'),

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

		$(".header__menu").removeClass("active"),
		$(".header__burger").removeClass("active"),
		$('body').removeClass('lock');

	});

	$("[data-collapse]").on("click", function(event) {
	event.preventDefault();
	
	var $this = $(this),
		blockId = $this.data("collapse");

	$this.toggleClass("active");
	});

});