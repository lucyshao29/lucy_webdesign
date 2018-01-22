$(document).ready(function() {
	$('.circle').mouseenter(function() {
		$('.none').show();
	});
});

$(document).ready(function() {
	$('.circle').mouseleave(function() {
		$('.none').hide();
	});
});

$(document).ready(function() {
	$('.circle').mouseenter(function() {
		$('.command').show();
	});
});

$(document).ready(function() {
	$('.circle').mouseenter(function() {
		$(this).css("background","rgba(255,255,255,1)");
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
	});
});

$(document).ready(function() {
	$('.8am').click(function() {
		$('.form').show();
	});
});

