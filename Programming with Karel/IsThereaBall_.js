// Karel should put a ball on the first spot
// if there isn't one already there and then move.
function start() {
    checkNoBall();
}
function checkNoBall(){
    if(noBallsPresent())
        putBall();
    if(ballsPresent()){
        move();
    }
}