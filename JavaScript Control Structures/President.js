// Here we write a program to determine
// if someone meets the requirements to 
// become President of the United States.
// They must:
// 1. Be at least 35 years old
// AND
// 2. Be a US Citizen
function start(){
	var atLeastThirtyFive = readBoolean("Are you at least thirty five years old? ");
	var isUSCitizen = readBoolean("Are you a US Citizen? ");
	var canBePresident = atLeastThirtyFive && isUSCitizen;
	println("Can be president: " + canBePresident);
}