$(document).ready(function(){

	/* Smooth scrolling */
	$('#nav-bar a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	/* navigation selection */
	$('#nav-bar a').click(function(e){
		e.preventDefault();
		$('ul#nav li a.selected').removeClass("selected");
		$(this).addClass("selected");
	});


	/* nav filler width fix */
	var left = $("div.container").css("margin-left");
	var right = $("div.container").css("margin-right");

	$(".nav-filler").first().css({"width" : left});
	$(".nav-filler").last().css({"width" : right});


	$(window).resize(function(){
		var left = $("div.container").css("margin-left");
		var right = $("div.container").css("margin-right");

		$(".nav-filler").first().css({"width" : left});
		$(".nav-filler").last().css({"width" : right});
	});

	//TODO: script that randomises the heading colours (random start - then same pattern from there)
	//colour pattern is always  > melon > yellow > green > purple > blue > teal >
	//but start point can be any colour.


});