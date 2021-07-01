Handlebars.registerHelper('getCurrencySymbol', function (language, options) {
   if(language == "GBP"){
      return "£";
   } else if (language == "JPY") {
	  return "¥";
   } else {
      return "$";
   }
});

Handlebars.registerHelper('splitUrl', function( url ) {
	return url.replace(/,http.*/gi, "");
});

Handlebars.registerHelper('splitNames', function( names ) {
	return names.split(",",1);
	
});
Handlebars.registerHelper('shortenWithEllipses', function ( str , max_characters ) {
	if (str !== null) {
		if ( str.length > max_characters ) str = str.substring( 0 , max_characters ).trim() + '…' ;
	}
	return str ;
});
Handlebars.registerHelper('floortext', function( t ) {
  var floortextvalue = t.substring(0, t.length-1)
  return floortextvalue;
});

Handlebars.registerHelper('sup', function( s ) {
  var last = s.charAt(s.length-1);
  return last;
});

var slideWidth;

function loaded(){
	// setTimeout(function () {
		$('.banner .loading').fadeOut();
	 	// $('.intro').delay(1000).fadeOut();
	 	$('.product-container').delay(1000).fadeIn();
	 	$('.icons-container').delay(1300).animate({bottom: '50px'});
	 	$('.btn-next-img').delay(1300).fadeIn().animate({right: '0px'});
	 	$('.btn-prev-img').delay(1300).fadeIn().animate({left: '0px'});
	// }, 1000);

	// data.Products[0].CustomField4="Development Site";
	// data.Products[0].CustomField5="1836m2";
	// data.Products[0].CustomField2="Auckland Central";
	// data.Products[0].CustomField3="77 Carlton Gore Road";
	// data.Products[0].CustomField7="Luke McCaw";

	initImageSlider();	
}

function initImageSlider() {
	var autoAnimate; 

	var slideCount = $('.slideshow-image ul li').length;
	slideWidth = $('.slideshow-image ul li').width();
	var slideHeight = $('.slideshow-image ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('.slideshow-image').css({ width: slideWidth, height: slideHeight });
	
	$('.slideshow-image ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('slideshow-image ul li:last-child').prependTo('.slideshow-image ul');


	setTimeout(function(){
		// autoAnimate = setInterval(myautoAnimate, 3000);
	},2000);

	setTimeout(function(){
		clearInterval(autoAnimate);
	},30000);

	function myautoAnimate() {
		moveRight();
	}

	$('.btn-prev-img').click(function(){
		moveLeft();
		clearInterval(autoAnimate);
		autoAnimate = setInterval(myautoAnimate, 3000);
	});
	$('.btn-next-img').click(function(){
		moveRight();
		clearInterval(autoAnimate);
		autoAnimate = setInterval(myautoAnimate, 3000);
	});
}

function moveLeft() {
    $('.slideshow-image ul').animate({
        left: + slideWidth
    }, 500, "easeInQuad", function () {
        $('.slideshow-image ul li:last-child').prependTo('.slideshow-image ul');
        $('.slideshow-image ul').css('left', '');
    });
};
function moveRight() {
    $('.slideshow-image ul').animate({
        left: - slideWidth
    }, 500, "easeInQuad", function () {
        $('.slideshow-image ul li:first-child').appendTo('.slideshow-image ul');
        $('.slideshow-image ul').css('left', '');
    });
};