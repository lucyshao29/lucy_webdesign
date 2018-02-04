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
	$('img').toggle('shake', {direction:'up'}, 'slow', {number:'1'});
});

// popup window for each page start
$(document).ready(function() {
	$('img').mouseenter(function() {
		$(this).hide();
		$('.click').show();
		$("#dialog").dialog({modal: true, height: 590, width: 1005 });
	});
	$('img').mouseleave(function() {
		$(this).show();
		$('.click').hide();
	})
});
// popup window for each page end

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
	$('.explode').mouseenter(function() {
		$(this).toggle('explode', {pieces:36}, function() {
			$(this).show();
		});
	});
});

$(document).ready(function() {
	$('.stable').mouseenter(function() {
		$(this).toggle('pulsate', 0.5, function() {
			$(this).show();
		});
	});
});

$(document).ready(function() {
	$('.metal').mouseenter(function() {
		$(this).css('background','#DBDBDB');
	});
	$('.metal').mouseleave(function() {
		$(this).css('background','');
	});
});
// Effects end
