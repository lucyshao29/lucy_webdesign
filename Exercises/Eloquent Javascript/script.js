// Triangle of #
var unit = "#";

for (var i = 0; i < 8; i++) {
	console.log(unit);
	unit=unit+'#';
}

// FizzBuzz
for (var j = 1; j < 101; j++) {
	if (j % 15 == 0)console.log('FizzBuzz');
	else if (j % 3 == 0)console.log('Fizz');
	else if (j % 5 == 0)console.log('Buzz');
	else console.log(j);
}

// checkboard
var size = 8;

var board = "";

for (var k = 0; k < size; k++) {
	for (var l = 0; l < size; l++) {
		if((k + l) % 2 == 0) 
			board += " ";
		else 
			board += "#";
	}
	board += "\n";
}