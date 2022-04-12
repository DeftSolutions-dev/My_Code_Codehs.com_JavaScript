var NUM_CIRCLES = 30;
var BIG_RADIUS = 180;

function start() {
	for(var i=0;i<NUM_CIRCLES;i++){
	    var c =new Circle(BIG_RADIUS);
	    c.setPosition(getWidth()/2,getHeight()-BIG_RADIUS);
	    c.setColor(Randomizer.nextColor());
	    add(c);
	    BIG_RADIUS = BIG_RADIUS - BIG_RADIUS/NUM_CIRCLES;
	}
}