$(document).ready(function(){
  	$('img').on('mouseenter', function() {
  		$(this).css('border', '5px solid #0c595b');
 	});

 	$('img').on('mouseleave', function() {
  		$(this).css('border', '5px dashed #0c595b');
 	});

 	$('.call-to-action').on('mouseenter', function() {
  		$(this).css('color', 'red');
 	});

 	$('.call-to-action').on('mouseleave', function() {
  		$(this).css('color', 'black');
 	});
});