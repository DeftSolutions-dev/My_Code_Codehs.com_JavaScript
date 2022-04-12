function start(){
	var diet = readLine("Any dietary restrictions? ");
	var lactoseIntolerant = diet == "lactose intolerant";
	var vegetarian = diet == "vegetarian";
	var noRestrictions = diet =="none";
	if(lactoseIntolerant == true)
	    println("No cheese");
	if(vegetarian == true)
	    println("Veggie burger");
	if(noRestrictions == true)
	    println("No alterations");
}