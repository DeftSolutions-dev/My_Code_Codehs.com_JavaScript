function start(){
	var cookiesBoxSold = readInt("How many boxes of cookies did you sell? ");
	var badgesNumber = readInt("How many badges do you have? ");
	var volunteerHours = readInt("How many volubteer hours did you work? ");
	var goldStatus = (cookiesBoxSold >= 100)||((cookiesBoxSold >= 50) &&
	(badgesNumber >=10) &&(volunteerHours >= 25));
	println("Is gold status? "+goldStatus);
}