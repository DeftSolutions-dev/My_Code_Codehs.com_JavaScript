var STARTING_SIZE = getWidth();
var MIN_SIZE = 5;

function start() {
    var radius= STARTING_SIZE/2;
	for(var i=STARTING_SIZE;i>MIN_SIZE;i=radius*2/Math.sqrt(2)){
	    var sq = new Rectangle(i,i);
	    sq.setPosition(getWidth()/2-i/2,getHeight()/2-i/2);
	    sq.setColor(Randomizer.nextColor());
	    add(sq);
	    radius = i/2;
	    var c = new Circle(radius);
	    c.setPosition(getWidth()/2,getHeight()/2);
	    c.setColor(Randomizer.nextColor());
	    add(c);
	}
}