function start(){//start
    build();
    down();
    build();
    finish();//finish
}
function down(){
    turnAround();
    move();
    move();
    turnLeft();
    move();
}
function turnAround(){
    turnLeft();
    turnLeft();
}
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}
function build(){
    move();
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}
function finish(){
    move();
    turnRight();
}