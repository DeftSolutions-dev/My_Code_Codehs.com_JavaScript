/* This program draws a big tower from Karel's starting spot */
function start(){
	bigTower();
	usingFunctions();
}
function bigTower(){
    if(facingEast())
        turnLeft();
    if(facingSouth())
        turnAround();
    if(facingWest())
        turnRight();
    while(frontIsClear()){
        putBall();
        move();
    }
    putBall();
}
function usingFunctions(){
    turnAround();
    turnAround();
}