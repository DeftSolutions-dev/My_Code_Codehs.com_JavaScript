// This program uses the doubleNumber() function to double a couple of
// numbers and prints out the results.
function start(){
	var numApples = 4;
	println("Before: " + numApples);
	var twiceAsMany = doubleNumber(numApples);
	println("After: " + twiceAsMany);
	
	var y = 11;
	println(doubleNumber(y));
}

//This function doubles a given number and returns the doubled value.
//Parameters:
// x: the number to double
//Returns:
// x * 2
function doubleNumber(x){
	var doubledX = 2 * x;
	return doubledX;
}