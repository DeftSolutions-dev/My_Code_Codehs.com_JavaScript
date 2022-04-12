function start(){
	move();
	if(frontIsClear()){
		move();
	}else{
		turnLeft();
	}
}