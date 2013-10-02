$(document).ready(function(){

	console.log("TEST this is a test");
	
	/* Smooth scrolling */
	$('#nav a[href^="#"]').on('click',function (e) {
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





});