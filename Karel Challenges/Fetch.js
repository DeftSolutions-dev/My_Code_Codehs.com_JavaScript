function start() {
    fetch();
    back();
}//Karel goes for the sword and goes back
function fetch(){
    move();
    turnLeft();
    moves();
    turnRight();
    move();
    takeBall();
}// Goes for the ball
function back(){
    turnAround();
    move();
    turnLeft();
    moves();
    turnRight();
    move();
    turnAround();
    putBall();
}//return
function moves(){
    for(var i=0;i<4;i++){
        move();
    }
}//Move x4.