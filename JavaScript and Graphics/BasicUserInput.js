/* This program prompts the user for their name
 * and age, and then prints it back out. */
function start(){
	var name = readLine("What is your name? ");
	println("Hello " + name + ", nice to meet you!");
	
	var age = readInt("What is your age? ");
	println("You are " + age + " years old.");
}