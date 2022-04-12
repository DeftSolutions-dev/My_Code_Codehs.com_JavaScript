/* This program helps us divide a large number
 * of people into groups. We tell it how many
 * total people there are, and how many people
 * there are per group, and we figure out
 * how many groups there are, and how many
 * are left over. */
function start(){
	var people = readInt("Number of people: ");
	var peoplePerGroup = readInt("People per group: ");
	
	// We must use Math.floor to make sure the result
	// is an integer
	var groups = Math.floor(people / peoplePerGroup);
	
	// The % operator helps us find the remainder
	var peopleLeft = people % peoplePerGroup;
	
	println("There are " + groups + " groups " + 
		"with " + peopleLeft + " left over.");
}