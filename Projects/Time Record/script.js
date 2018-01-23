$(document).ready(function() {
	$('.circle').mouseenter(function() {
		$('.command').show();
		$(this).css("background","rgba(255,255,255,1");
	});
});

$(document).ready(function() {
	$('.circle').mouseleave(function() {
		$(this).css("background","rgba(255,255,255,0.2)");
	});
});

$(document).ready(function() {
	$('h2').mouseenter(function() {
		$('.command2').show();
		$('.schedule').show();
	});
});

$(document).ready(function() {
	$('.8am').click(function() {
		$('.form').show();
	});
});


$(document).ready(function() {
	$('h2').mouseleave(function() {
		$('.schedule').hide();
	});
});

$(document).ready(function() {
	$("input[name=8am]:checked").change(function() {
		$('.form1').show();
	});
});

