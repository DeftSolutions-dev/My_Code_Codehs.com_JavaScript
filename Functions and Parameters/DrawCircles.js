/* Write a function to draw a circle,given
 * a radius, color, and x and y position
 * for the center. 
 */
function drawCircle(radius, color, x, y){
	var circle = new Circle(radius);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}

function start(){
	drawCircle(40, Color.red, 100, 300);
	drawCircle(50, Color.green, 50, 100);
	drawCircle(70, Color.blue, getWidth()/2, getHeight()/2);
}