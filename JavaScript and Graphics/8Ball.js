// This program will draw an 8 ball 
// centered on the screen. The circle
// should be black with radius 100, and
// the "8" should be white in 50pt Arial
// font.
function start(){
	var ball = new Circle(100);
	var centerX = getWidth() / 2;
	var centerY = getHeight() / 2;
	ball.setPosition(centerX, centerY);
	add(ball);
	
	var number = new Text("8");
	number.setFont("50pt Arial");
	number.setColor(Color.white);
	number.setPosition(centerX - number.getWidth()/2, centerY + number.getHeight()/2);
	add(number);
}