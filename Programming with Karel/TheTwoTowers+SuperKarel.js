function start(){//Start
    buildTower();
    turnAround();
    downTower();
    buildTower();
    finish();
}
function buildTower(){
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}
function downTower(){
    move();
    move();
    turnLeft();
    move();
}
function finish(){//Finish
    move();
    turnRight();
}