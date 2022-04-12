/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
	var miles = readInt("How many miles did you run?");
	var minutes = readInt("How many minutes did it take you?");
	var mph = miles / (minutes / 60);
	println(mph);
}