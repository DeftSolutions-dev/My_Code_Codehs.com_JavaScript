function start(){
	turnLeft();
	move();
	turnRight();
	jumpHurdle();
	jumpHurdle();
	jumpHurdle();
	turnRight();
	move();
	turnLeft();
}
function jumpHurdle(){
    for(var i=0;i<5;i++)
        move();
}