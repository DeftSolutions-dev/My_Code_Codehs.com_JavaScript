var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";

function start(){
	drawPoolBall(Color.orange, 5, 100, 100);
	drawPoolBall(Color.green, 6, 50, 200);
	drawPoolBall(Color.red, 3, 150, 350);
	drawPoolBall(Color.blue, 2, 250, 140);
	// Add some more pool balls!
}


function drawPoolBall(color, num, x, y){
	var poolBall = new Circle(POOL_BALL_RADIUS);
	poolBall.setPosition(x,y);
	poolBall.setColor(color);
	add(poolBall);
	
	var ballNum = new Text(num,POOL_BALL_FONT);
	ballNum.setPosition(x-12,y+18);
	ballNum.setColor(Color.white);
	add(ballNum);
}