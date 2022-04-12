// This program will add a red rectangle
// with width 100 and height 50 at position
// (60, 150).
function start(){
	var rect = new Rectangle(100, 50);
	rect.setPosition(60, 150);
	rect.setColor(Color.red);
	add(rect);
}