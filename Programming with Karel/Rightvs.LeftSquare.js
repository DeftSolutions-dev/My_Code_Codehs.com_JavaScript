function start() {
    if(facingNorth()){
        makeRightSquare();
    } else {
        makeLeftSquare();
    }
}
function makeLeftSquare(){
    for(var i=0;i<4;i++){
        putBall();
        move();
        turnLeft();
    }
}
function makeRightSquare(){
    for(var j=0;j<4;j++){
        putBall();
        move();
        turnRight();
    }
}