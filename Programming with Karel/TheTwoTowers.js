function start(){
    buildTower();
    gg();
    buildTower();
}
function buildTower(){
    move();
    putBall();
    turnLeft();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
}
function gg(){
    move();
    turnRight();
    move();
    move();
    move();
    turnLeft();
}
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}