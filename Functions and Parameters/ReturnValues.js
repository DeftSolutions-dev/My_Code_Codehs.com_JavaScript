function start(){
	var x = addOne(8);
	println(x);
	
	var y = addOne(10);
	println(y);
	
	var a = sum(10, 20);
	println(a);
}

function addOne(x){
	// The result variable in this function is totally
	// different than the one in the sum function
	var result = x + 1;
	return result;
}

function sum(x, y){
	var result = x + y;
	return result;
}