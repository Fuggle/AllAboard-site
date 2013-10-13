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

	var h2count = $("h2, h3").length - 1;
	var start_point =  Math.ceil(Math.random() * h2count);
	$("h2, h3").removeClass();
	colourHeadings(start_point, h2count);

});

//called on the start point, and hand out classes in order until it runs out of h2 and h3 elements
function colourHeadings(s, c){

	var pageCount = s;
	var colours = ["blue","teal","melon","yellow","green","purple"];
	var arrayCount = 1;

	for(var i = 0; i <= c; i++){
		console.log("pagecount: " +pageCount + " ---- arrayCount: " + arrayCount + "   ---ind: " + i);
		if (i == 0) {
			$("h2, h3").eq(s).addClass(colours[i]);
		} else {
			$("h2, h3").eq(pageCount).addClass(colours[arrayCount]);
		};

		if (pageCount == c) {
			pageCount = 0;
		} else { 
			pageCount = pageCount + 1;
		};

		if (arrayCount == colours.length - 1) {
			arrayCount = 1;
		} else {
			arrayCount = arrayCount + 1;
		};

	}
}






