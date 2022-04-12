// We use comparison operators to see
// if someone is old enough to vote in
// the United States of America
function start(){
	var age = readInt("What is your age? ");
	var oldEnough = age >= 18;
	println("Can vote: " + oldEnough);
}