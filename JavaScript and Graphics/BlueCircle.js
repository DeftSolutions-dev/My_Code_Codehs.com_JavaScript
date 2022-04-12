// This program will add a blue circle
// with radius 30 and center at (100,50).
function start(){
	var circle = new Circle(30);
	circle.setPosition(100, 50);
	circle.setColor(Color.blue);
	add(circle);
}