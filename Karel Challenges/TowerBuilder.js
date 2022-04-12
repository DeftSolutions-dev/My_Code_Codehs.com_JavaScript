function start() {
    build();
}
function build(){
    turnLeft();
    for(var i=0;i<2;++i){
        putBall();
        move();
    }
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
    if(frontIsClear()){
        move();
    }
    if(frontIsClear()){
        move();
        build();
    }
}//run