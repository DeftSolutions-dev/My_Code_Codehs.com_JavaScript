/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    go();
}
function go(){
    
    for(var j=0;j<32;++j){
        moveWall();
        ball();
    }
}
function ball(){
    putBall();
    turnLeft();
}
function moveWall(){
    while(frontIsClear()){
        move();
    }
}