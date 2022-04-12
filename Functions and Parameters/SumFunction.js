function start(){
	sum(1, 1);
	
	sum(5, 10);
	
	var x = 10;
	var y = 104;
	sum(x, y);
}

//Note that the parameters of a function can have any valid variable names. For
//example, this function could also use num1 and num2, or integerA and integerB. 
function sum(first, second){
	var total = first + second;
	println(total);
}