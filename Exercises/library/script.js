function setup() {
	createCanvas (1000,500)
}

function draw() {
	ellipse(50, 50, 80, 80);
	ellipse(110,270,53,53);
	line(50,90,80,300);
	line(80,300,110,310);
	line(110,297,110,370);
	line(110,310,120,350);
	line(110,370,90,430);
	line(110,370,130,430);
	if (mouseIsPressed) {
		stroke(200);
		fill(200);
	}
	else {
		stroke(100);
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
	line(mouseX,mouseY +40,80,300);
}

