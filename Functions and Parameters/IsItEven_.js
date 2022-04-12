var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
    while(true){
	var input = readInt("Enter a number: ");
	if(input == SENTINEL){
	    println("Done.");
	    break;
	} 
	if(isEven(input)){
	    println("Even");
	}else{
	    println("Odd");
	}
    }
}
function isEven(num){
    return (num % 2 == SENTINEL)? true:false;
}