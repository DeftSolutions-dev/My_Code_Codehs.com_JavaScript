function start() {
    if(frontIsClear()){
        move();
    }
    if(frontIsBlocked()){
        turnLeft();
        move();
    }
}