/*karel doubles balls*/
function start(){
    build();
}
function build(){
    move();
    run();
    move();
    turnAround();
    time();
    move();
    move();
    turnAround();
}
function run(){
    while(ballsPresent()){
        takeBall();
        move();
        putBall();
        putBall();
        turnAround();
        move();
        turnAround();
    }
}
function time(){
    while(ballsPresent()){
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        turnAround();
    }
}