//Declare a constant here to represent the cost of a tshirt

function start(){
	var tshirts = readInt("How many tshirts?");
	var COST_OF_SHIRTS = 20;
	println(tshirts + " shirts would cost $" + (tshirts*COST_OF_SHIRTS));
}