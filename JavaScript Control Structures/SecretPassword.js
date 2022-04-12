// This program reads a password from the 
// user and checks if it matches the secret
// password. We print out a message in
// either case.
function start(){
	var secretPassword = "abc123";
	var password = readLine("Password: ");
	if(password == secretPassword){
		println("Passwords match.");
	}else{
		println("Passwords don't match.");
	}
}