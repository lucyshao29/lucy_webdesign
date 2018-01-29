$(document).ready(function() {
	$('.gas').mouseenter(function() {
		$(this).animate({opacity:0});
	});
});

$(document).ready(function() {
	$('.gas').mouseleave(function() {
		$(this).animate({opacity:1});
	});
});

$(document).ready(function() {
	$('.explode').mouseenter(function() {
		$(this).toggle('explode');
	});
});



 // $(".explode").click(function(){
 //               $(".target").hide( "explode", {pieces: 16 }, 2000 );
 //            });

 //            $("#show").click(function(){
 //               $(".target").show( "explode", {pieces: 16}, 2000 );
 //            });
