function start(){
	var of10and14 = max(10,14);
	var of0and1 = max(0,1);
	var of50and54 = max(50,54);
	var ofN5and5 = max(-5,-5);
	var of3and6 = max(3,6);
	var of6and3 = max(6,3);
	var of100and1000 = max(100,1000);
	var of9000and9001 = max(9000,9001);
	println("The max is "+of10and14);
	println("The max is "+of0and1);
	println("The max is "+of50and54);
	println("The max is "+ofN5and5);
	println("The max is "+of3and6);
	println("The max is "+of100and1000);
	println("The max is "+of9000and9001);
	
}
function max(fNum,sNum){
    return (fNum>sNum) ? fNum:sNum;
}