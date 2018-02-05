// Tabs
function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabName).style.display = "block"; 
}

// toggle mascot
$(document).ready(function(){
	$('.flask').toggle('shake', {direction:'up', times: 3, distance:10}, 'slow', function() {
		$(this).show();
	});
});

$(document).ready(function(){
	$('#flaskIon').toggle('shake', {direction:'up', times: 3, distance:10}, 'slow', function() {
		$(this).show();
	});
});

// popup window for each page start
$(document).ready(function() {
	$('.flask').mouseenter(function() {
		$('.flask').hide();
		$('.click').show();
		$("#dialog").dialog({modal: true, height: 590, width: 1005 });
	});
	$('.click').mouseleave(function() {
		$('.flask').show();
		$('.click').hide();
	})
});
// popup window for each page end

// Ion page
$(document).ready(function() {
	$('h1').mouseenter(function() {
		$(this).next('h4').show();
	});
	$('h1').mouseleave(function() {
		$(this).next('h4').hide();
	});
});

$(document).ready(function() {
	$('.colorless').mouseenter(function() {
		$(this).css('background','rgba(0,0,0,0)');
		$(this).css('box-shadow','3px 3px rgba(0,0,0,0)');
	});
	$('.colorless').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});
});

$(document).ready(function() {
	$('.purple').mouseenter(function() {
		$(this).css('background','rgba(121,0,213,1)');
		$(this).css('box-shadow','3px 3px rgb(92,0,162)');
	});
	$('.purple').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});
});

$(document).ready(function() {
	$('.palepink').mouseenter(function() {
		$(this).css('background','rgb(255,213,247)');
		$(this).css('box-shadow','3px 3px rgb(255,196,244)');
	});
	$('.palepink').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});
});

$(document).ready(function() {
	$('.pink').mouseenter(function() {
		$(this).css('background','rgb(255,104,241)');
		$(this).css('box-shadow','3px 3px rgb(230,69,214)');
	});
	$('.pink').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});
});

$(document).ready(function() {
	$('.green').mouseenter(function() {
		$(this).css('background','rgb(30,223,0)');
		$(this).css('box-shadow','3px 3px rgb(25,191,0)');
	});
	$('.green').mouseleave(function() {
		$(this).css('background','');
		$(this).css('box-shadow','');
	});
});

$(document).ready(function() {
	$('.bluepurple').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('bluepurplebp');
	});
	$('.bluepurple').mouseleave(function() {
		$(this).removeClass('bluepurplebp');
		$(this).addClass('element');
	});
});

$(document).ready(function() {
	$('.colorlessblue').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('colorlessbluecb');
	});
	$('.colorlessblue').mouseleave(function() {
		$(this).removeClass('colorlessbluecb');
		$(this).addClass('element');
	});
});

$(document).ready(function() {
	$('.greenyellow').mouseenter(function() {
		$(this).removeClass('element');
		$(this).addClass('greenyellowgy');
	});
	$('.greenyellow').mouseleave(function() {
		$(this).removeClass('greenyellowgy');
		$(this).addClass('element');
	});
});
// Ion Page End
// group explanation popups
$(document).ready(function() {
	$('.g1').mouseenter(function(){
		$('.g1').css('background','#BCBCBC');
		$('.paragraph1').show();
	});
	$('.g1').mouseleave(function() {
		$('.g1').css('background','');
		$('.paragraph1').hide();
	});
});

$(document).ready(function() {
	$('.g2').mouseenter(function(){
		$('.g2').css('background','#BCBCBC');
		$('.paragraph2').show();
	});
	$('.g2').mouseleave(function() {
		$('.g2').css('background','');
		$('.paragraph2').hide();
	});
});

$(document).ready(function() {
	$('.g3').mouseenter(function(){
		$('.g3').css('background','#BCBCBC');
		$('.paragraph3').show();
	});
	$('.g3').mouseleave(function() {
		$('.g3').css('background','');
		$('.paragraph3').hide();
	});
});

$(document).ready(function() {
	$('.g4').mouseenter(function(){
		$('.g4').css('background','#BCBCBC');
		$('.paragraph4').show();
	});
	$('.g4').mouseleave(function() {
		$('.g4').css('background','');
		$('.paragraph4').hide();
	});
});

$(document).ready(function() {
	$('.g5').mouseenter(function(){
		$('.g5').css('background','#BCBCBC');
		$('.paragraph5').show();
	});
	$('.g5').mouseleave(function() {
		$('.g5').css('background','');
		$('.paragraph5').hide();
	});
});

$(document).ready(function() {
	$('.g16').mouseenter(function(){
		$('.g16').css('background','#BCBCBC');
		$('.paragraph16').show();
	});
	$('.g16').mouseleave(function() {
		$('.g16').css('background','');
		$('.paragraph16').hide();
	});
});

$(document).ready(function() {
	$('.g17').mouseenter(function(){
		$('.g17').css('background','#BCBCBC');
		$('.paragraph17').show();
	});
	$('.g17').mouseleave(function() {
		$('.g17').css('background','');
		$('.paragraph17').hide();
	});
});

$(document).ready(function() {
	$('.g18').mouseenter(function(){
		$('.g18').css('background','#BCBCBC');
		$('.paragraph18').show();
	});
	$('.g18').mouseleave(function() {
		$('.g18').css('background','');
		$('.paragraph18').hide();
	});
});
//group explanation popups end

$(document).ready(function() {
	$('.paragraph').hide();
});

// special effects start
$(document).ready(function() {
	$('.gas').mouseenter(function() {
		$(this).toggle('puff', function() {
			$(this).show();
		});
	});
});

$(document).ready(function() {
	$('#liquid').mouseenter(function() {
		$(this).css('animation-play-state','running');
	});
	$('#liquid').mouseleave(function() {
		$(this).css('animation-play-state','paused');
	});
});

$(document).ready(function() {
	$('#liquid1').mouseenter(function() {
		$(this).css('animation-play-state','running');
	});
	$('#liquid1').mouseleave(function() {
		$(this).css('animation-play-state','paused');
	});
});


$(document).ready(function(){
	$('.solid').mouseenter(function() {
		$(this).toggle('shake', {direction:'left', times: 3, distance:3}, function() {
			$(this).show();
		});
	});
});
// Special effects end

// Orbital start
$(document).ready(function() {
	$('.os').mouseenter(function(){
		$('.os').css('background','#BCBCBC');
		$('.paragraphS').show();
	});
	$('.os').mouseleave(function() {
		$('.os').css('background','');
		$('.paragraphS').hide();
	});
});

$(document).ready(function() {
	$('.p').mouseenter(function(){
		$('.p').css('background','#BCBCBC');
		$('.paragraphp').show();
	});
	$('.p').mouseleave(function() {
		$('.p').css('background','');
		$('.paragraphp').hide();
	});
});

$(document).ready(function() {
	$('.d').mouseenter(function(){
		$('.d').css('background','#BCBCBC');
		$('.paragraphd').show();
	});
	$('.d').mouseleave(function() {
		$('.d').css('background','');
		$('.paragraphd').hide();
	});
});

$(document).ready(function() {
	$('.f').mouseenter(function(){
		$('.f').css('background','#BCBCBC');
		$('.paragraphf').show();
	});
	$('.f').mouseleave(function() {
		$('.f').css('background','');
		$('.paragraphf').hide();
	});
});

$(document).ready(function() {
	$('.dblock').mouseenter(function() {
		$('.dblock').css('animation-play-state','paused');
	});
	$('.dblock').mouseleave(function() {
		$('.dblock').css('animation-play-state','running');
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
