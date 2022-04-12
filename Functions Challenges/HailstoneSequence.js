var con = 0;
function start(){
	// Write your code here
	var num = readInt("Enter number: ");
	while(num != 1){
	    println(num);
	    if(num % 2==0){
	        num = num / 2;
	    }else{
	        num = (num*3)+1; 
	    }
	    con++;
	}
	println("It took "+con+" steps to complete..");
}