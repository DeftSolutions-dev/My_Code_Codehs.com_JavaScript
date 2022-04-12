function start(){
	var credits = readBoolean("Do you have enough credits? ");
	var met = readBoolean("Have you met all requirements? ");
	var can = credits&&met;
	println("Can you Graduate? "+can);
}