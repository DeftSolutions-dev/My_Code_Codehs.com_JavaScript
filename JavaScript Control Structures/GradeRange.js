// We use comparison operators to see if 
// a grade fell into the 'B' range.
function start(){
	var grade = readInt("What was your grade?");
	var gotB = grade >= 80 && grade < 90;
	println("Got a B: " + gotB);
}