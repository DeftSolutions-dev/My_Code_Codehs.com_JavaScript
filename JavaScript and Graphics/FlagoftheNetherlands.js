/* This program should draw the Netherlands flag. The
 * top third of the canvas is red, the middle third
 * is white, and the bottom third is blue. */
function start(){
	var redBox = new Rectangle(getWidth(), getHeight()/3);
	redBox.setPosition(0,0);
	redBox.setColor(Color.red);
	var whiteBox = new Rectangle(getWidth(),getHeight()/3);
	whiteBox. setPosition(0,getHeight()/3);
	whiteBox.setColor(Color.white);
	var blueBox = new Rectangle(getWidth(),getHeight()/3);
	blueBox.setPosition(0,getHeight()/3*2);
	blueBox.setColor(Color.blue);
	add(redBox); add(whiteBox); add(blueBox);
}