/* This example uses an if/else statement to invert
 * the placement of tennis balls on the first row -- 
 * if there is a ball present, take it, if not, put one down.
*/
function start(){
    checkBall();
    
    // Loops through the rest of the row
	for(var i = 0; i < 3; i++){
	    move();
	    checkBall();
	}
}

// Function that inverts the presence of balls
function checkBall(){
	if(noBallsPresent()){
		putBall();
	} else {
	    takeBall();
	}
}