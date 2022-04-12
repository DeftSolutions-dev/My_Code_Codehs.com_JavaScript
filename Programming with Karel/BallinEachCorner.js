function start () {
    run();
    run();
    run();
    run();
}
function run(){
    putBall();
    for(var i=0;i<5;i++)
        move();
    turnLeft();
}