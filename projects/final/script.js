$(document).ready(function(){
	$('.flask').toggle('shake', {direction:'up', times: 3, distance:10}, 'slow', function() {
		$(this).show();
	});

	$('#flaskIon').toggle('shake', {direction:'up', times: 3, distance:10}, 'slow', function() {
		$(this).show();
	});

	$('#dialog').hide();
	$('#dialog1')
	$('.button').hide();

// popup window for each page start
	$('.flask').mouseenter(function() {
		$('.flask').hide();
		$('.click').show();
		$('.click').css( 'cursor', 'pointer' );
	});
	$('.click').mouseleave(function() {
		$('.flask').show();
		$('.click').hide();
	});
	$('.click').click(function() {
		$('#dialog').show();
		$('#dialog1').show();
		$('.button').show();
	});
	$('.button').mouseenter(function() {
		$(this).css( 'cursor', 'pointer' );
	})
	$('.button').click(function() {
		$('#dialog').hide();
		$('#dialog1').hide();
		$('.button').hide();
	});

// popup window for each page end

// Ion page
	$('h1').mouseenter(function() {
		$(this).next('h4').show();
	});
	$('h1').mouseleave(function() {
		$(this).next('h4').hide();
	});

	$('.colorless').mouseenter(function() {
		$(this).css('background','rgba(0,0,0,0)');
		$(this).css('box-shadow','3px 3px rgba(0,0,0,0)');
	});
	$('.colorless').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});

	$('.purple').mouseenter(function() {
		$(this).css('background','rgba(121,0,213,1)');
		$(this).css('box-shadow','3px 3px rgb(92,0,162)');
	});
	$('.purple').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});

	$('.palepink').mouseenter(function() {
		$(this).css('background','rgb(255,213,247)');
		$(this).css('box-shadow','3px 3px rgb(255,196,244)');
	});
	$('.palepink').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});

	$('.pink').mouseenter(function() {
		$(this).css('background','rgb(255,104,241)');
		$(this).css('box-shadow','3px 3px rgb(230,69,214)');
	});
	$('.pink').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});

	$('.green').mouseenter(function() {
		$(this).css('background','rgb(30,223,0)');
		$(this).css('box-shadow','3px 3px rgb(25,191,0)');
	});
	$('.green').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});

	$('.bluepurple').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('bluepurplebp');
	});
	$('.bluepurple').mouseleave(function() {
		$(this).removeClass('bluepurplebp');
		$(this).addClass('element');
	});

	$('.colorlessblue').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('colorlessbluecb');
	});
	$('.colorlessblue').mouseleave(function() {
		$(this).removeClass('colorlessbluecb');
		$(this).addClass('element');
	});

	$('.greenyellow').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('greenyellowgy');
	});
	$('.greenyellow').mouseleave(function() {
		$(this).removeClass('greenyellowgy');
		$(this).addClass('element');
	});
// Ion Page End
// group explanation popups
	$('.g1').mouseenter(function(){
		$('.g1').css('background','rgb(255,177,20)');
		$('.paragraph1').show();
	});
	$('.g1').mouseleave(function() {
		$('.g1').css('background','');
		$('.paragraph1').hide();
	});

	$('.g2').mouseenter(function(){
		$('.g2').css('background','rgb(255,177,20)');
		$('.paragraph2').show();
	});
	$('.g2').mouseleave(function() {
		$('.g2').css('background','');
		$('.paragraph2').hide();
	});

	$('.g3').mouseenter(function(){
		$('.g3').css('background','rgb(255,177,20)');
		$('.paragraph3').show();
	});
	$('.g3').mouseleave(function() {
		$('.g3').css('background','');
		$('.paragraph3').hide();
	});

	$('.g4').mouseenter(function(){
		$('.g4').css('background','rgb(255,177,20)');
		$('.paragraph4').show();
	});
	$('.g4').mouseleave(function() {
		$('.g4').css('background','');
		$('.paragraph4').hide();
	});

	$('.g5').mouseenter(function(){
		$('.g5').css('background','rgb(255,177,20)');
		$('.paragraph5').show();
	});
	$('.g5').mouseleave(function() {
		$('.g5').css('background','');
		$('.paragraph5').hide();
	});

	$('.g16').mouseenter(function(){
		$('.g16').css('background','rgb(255,177,20)');
		$('.paragraph16').show();
	});
	$('.g16').mouseleave(function() {
		$('.g16').css('background','');
		$('.paragraph16').hide();
	});

	$('.g17').mouseenter(function(){
		$('.g17').css('background','rgb(255,177,20)');
		$('.paragraph17').show();
	});
	$('.g17').mouseleave(function() {
		$('.g17').css('background','');
		$('.paragraph17').hide();
	});

	$('.g18').mouseenter(function(){
		$('.g18').css('background','rgb(255,177,20)');
		$('.paragraph18').show();
	});
	$('.g18').mouseleave(function() {
		$('.g18').css('background','');
		$('.paragraph18').hide();
	});
//group explanation popups end

	$('.paragraph').hide();

// special effects start
	$('.gas').mouseenter(function() {
		$(this).toggle('puff', function() {
			$(this).show();
		});
	});

	$('#liquid').mouseenter(function() {
		$(this).css('animation-play-state','running');
	});
	$('#liquid').mouseleave(function() {
		$(this).css('animation-play-state','paused');
	});

	$('#liquid1').mouseenter(function() {
		$(this).css('animation-play-state','running');
	});
	$('#liquid1').mouseleave(function() {
		$(this).css('animation-play-state','paused');
	});


	$('.solid').mouseenter(function() {
		$(this).toggle('shake', {direction:'left', times: 3, distance:3}, function() {
			$(this).show();
		});
	});
// Special effects end

// Orbital start
	$('.os').mouseenter(function(){
		$('.os').css('background','rgb(255,177,20)');
		$('.paragraphS').show();
	});
	$('.os').mouseleave(function() {
		$('.os').css('background','');
		$('.paragraphS').hide();
	});

	$('.p').mouseenter(function(){
		$('.p').css('background','rgb(255,177,20)');
		$('.paragraphp').show();
	});
	$('.p').mouseleave(function() {
		$('.p').css('background','');
		$('.paragraphp').hide();
	});

	$('.d').mouseenter(function(){
		$('.d').css('background','rgb(255,177,20)');
		$('.paragraphd').show();
	});
	$('.d').mouseleave(function() {
		$('.d').css('background','');
		$('.paragraphd').hide();
	});

	$('.f').mouseenter(function(){
		$('.f').css('background','rgb(255,177,20)');
		$('.paragraphf').show();
	});
	$('.f').mouseleave(function() {
		$('.f').css('background','');
		$('.paragraphf').hide();
	});

	$('.dblock').mouseenter(function() {
		$('.dblock').css('animation-play-state','paused');
	});
	$('.dblock').mouseleave(function() {
		$('.dblock').css('animation-play-state','running');
	});

	$('h5').mouseenter(function() {
		$(this).css('font-size','15px');
	});

	$('h5').mouseleave(function() {
		$(this).css('font-size','');
	});
});


// $(document).ready(function() {
// 	$('.explode').mouseenter(function() {
// 		$(this).toggle('explode', {pieces:36}, function() {
// 			$(this).show();
// 		});
// 	});
// });

// $(document).ready(function() {
// 	$('.stable').mouseenter(function() {
// 		$(this).toggle('pulsate', 0.5, function() {
// 			$(this).show();
// 		});
// 	});
// });

// $(document).ready(function() {
// 	$('.metal').mouseenter(function() {
// 		$(this).css('background','#DBDBDB');
// 	});
// 	$('.metal').mouseleave(function() {
// 		$(this).css('background','');
// 	});
// });
// // Effects end
