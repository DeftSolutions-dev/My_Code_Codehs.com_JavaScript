// Write a program to determine if you
// are wasting time.
function start(){
	var onFacebook = false;
	var onEmail = false;
	
	// This is true if one, or the other, 
	// or both are true.
	var isWastingTime = 
		onFacebook || onEmail;
	
	println("Wasting time? " + 			
		isWastingTime);
}