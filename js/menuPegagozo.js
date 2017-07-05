$(document).ready(function(){
	var altura = $('.menu').offset().top;
	$(window).on('scroll', function(){
		if ($(window).scrollTop()>altura) {
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});

$("#contact").click(function  (e) {
	e.preventDefault();
	//emailjs.sendForm("gmail", "template_myZ8ZahM","pedidosForm");
    $("#pedidosForm")[0].reset();
    $("#myModal").modal();

});