var POLE_WIDTH = 5;
var LIGHT_RADIUS = 10;
var LIGHT_REQUIRED_HEIGHT = 200;
var counter = 0;
function start(){
	drawBuilding(50, 200, 50);
	drawBuilding(100, 300, 125);
	drawBuilding(50, 150, 200);
	drawBuilding(100, 350, 275);
}
function drawBuilding(width, height, xPosition){
	var windowWidth = width/4;
	var windowHeight = height/11;
	var doorWidth = width/3;
	var doorHeight = height/6;
	var evenWindowX = xPosition + width/10;
	var evenWindowY = getHeight() - height/4;
	var oddWindowX = xPosition - width/3;
	var oddWindowY = getHeight() - height/7;
	var build = new Rectangle(width,height);
	build.setPosition(xPosition - width/2,getHeight()-height);
	build.setColor(Color.black);
	add(build);
	if(height>LIGHT_REQUIRED_HEIGHT){
	    var pole = new Rectangle(POLE_WIDTH, height/6);
	    pole.setPosition(xPosition - POLE_WIDTH,getHeight()-height-height/6);
	    add(pole);
	    var light = new Circle(LIGHT_RADIUS);
	    light.setPosition(xPosition-2.5,getHeight()-height-height/5.5);
	    light.setColor(Color.green);
	    add(light);
	    var door = new Rectangle(doorWidth,doorHeight);
	    door.setPosition(xPosition - width/6,getHeight()-height/6)
	    door.setColor(Color.white);
	    add(door);
	}
	if(height<=LIGHT_REQUIRED_HEIGHT){
	    for(var i=0;i<8;i++){
	        counter++
	        if(counter % 2==0){
	            var windowS = new Rectangle(windowWidth,windowHeight);
	            windowS.setPosition(evenWindowX,evenWindowY);
	            windowS.setColor(Color.yellow);
	            add(windowS);
	            evenWindow = evenWindowY-windowHeight*2.5;
	        }
	        if(counter % 2 !=0){
	            var windowS = new Rectangle(windowWidth,windowHeight);
	            windowS.setPosition(oddWindowX,oddWindowY);
	            windowS.setColor(Color.yellow);
	            add(windowS);
	            oddWindowY=oddWindowY-windowHeight*2.5;
	        }
	    }
	}
}