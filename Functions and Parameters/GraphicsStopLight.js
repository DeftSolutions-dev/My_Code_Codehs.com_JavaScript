var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 200;
var STOPLIGHT_HEIGHT = 250;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

function start(){
	var lightbox = new Rectangle(150,370);
	lightbox.setColor(GRAY_COLOR);
	lightbox.setPosition(125,70);
	add(lightbox);
	drawCircle(LIGHT_RADIUS,Color.yellow,STOPLIGHT_WIDTH,STOPLIGHT_HEIGHT);
    	drawCircle(LIGHT_RADIUS,Color.red,STOPLIGHT_WIDTH,STOPLIGHT_HEIGHT-DIST_BETWEEN_LIGHTS);
	drawCircle(LIGHT_RADIUS,Color.green,STOPLIGHT_WIDTH,STOPLIGHT_HEIGHT+DIST_BETWEEN_LIGHTS);
}
function drawCircle(radius,color,x,y){
    var circle = new Circle(radius);
    circle.setColor(color);
    circle.setPosition(x,y);
    add(circle);
}