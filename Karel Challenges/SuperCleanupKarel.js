function start() {
    build();
    turnLeft();
}
function build(){
    while(leftIsClear()){
        rows();
        up();
    }
    rows();
    run();
}
function rows(){
    checkBalls();
    while(frontIsClear()){
        move();
        checkBalls();
    }
    back();
}
function back(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnAround();
}

function checkBalls(){//check ball
    if(ballsPresent()){
        takeBall(); 
    }
}
function run(){//Run's
    turnRight();
    while(frontIsClear()){
        move();
    }
}
function up(){
    turnLeft();
    move();
    turnRight();
}