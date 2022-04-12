/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

function start(){
    var grey = Color.grey;
    
    var topCircle = new Circle(TOP_RADIUS);
    topCircle.setPosition(getWidth()/2,getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS*2+TOP_RADIUS));
    
    var midCircle = new Circle(MID_RADIUS);
    midCircle.setPosition(getWidth()/2,getHeight()-(BOTTOM_RADIUS*2+MID_RADIUS));
    
    var bottomCircle = new Circle(BOTTOM_RADIUS);
    bottomCircle.setPosition(getWidth()/2,getHeight() - BOTTOM_RADIUS);
    
    
    topCircle.setColor(grey);
    midCircle.setColor(grey);
    bottomCircle.setColor(grey);
    add(bottomCircle);
    add(midCircle);
    add(topCircle);
    
}