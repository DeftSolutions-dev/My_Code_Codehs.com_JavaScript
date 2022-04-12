// This program draws some balloons

var MIN_RADIUS = 20;
var MAX_RADIUS = 40;
var NUM_BALLOONS = 25;
var centerY = getHeight() / 1.4;
function start() {
	for(var j=0;j<NUM_BALLOONS;j++){
	    drawBalloons(Randomizer.nextInt(MAX_RADIUS,getWidth()-MAX_RADIUS),Randomizer.nextInt(MAX_RADIUS,centerY-110),Randomizer.nextInt(MIN_RADIUS,MAX_RADIUS));
	}
}
function drawBalloons(x,y,radius){
    var line = new Line(getWidth()/2,centerY,x,y);
    add(line);
    var ballons = new Circle(radius);
    ballons.setColor(Randomizer.nextColor());
    ballons.setPosition(x,y);
    add(ballons);
}