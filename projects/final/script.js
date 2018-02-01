function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabName).style.display = "block"; 
}


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

