/*
 * This program has karel put down 6 balls
 * and then move forward one location.
 */
function start(){
    // Loop will repeat 6 times before exiting
    for(var i = 0; i < 6; i++){
	    putBall();
    }

    move();
}