var col = 0;
var x = new Array(50);
var y = new Array(50);

function setup() {
	createCanvas(windowWidth, windowHeight);
	smooth();
	noStroke();
	colorMode(HSB);

	for (let i = 0; i < 50; i++) {			//this is the trail
		x[i] = 0;
		y[i] = 0;
	}
}

function draw() {
	background(0, 0, 93);
	noCursor();

	for (let i = 0; i < 49; i++) {			//this is the trail
		x[i] = x[i + 1];
		y[i] = y[i + 1];

		fill(col, 255, 255);
		ellipse(x[i], y[i], i, i);
	}

	x[49] = mouseX;
	y[49] = mouseY;
}

function mousePressed() {
	col += 20;				//this changes the color of the circle
	col %= 255;
	print(col);
}