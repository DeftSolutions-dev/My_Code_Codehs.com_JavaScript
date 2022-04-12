function start(){
	var firstDice = readInt("What did you roll with roll your first dice? ");
	var secondDice = readInt("What did you roll with your second dice? ");
	var rolledDoubles = firstDice == secondDice;
	println("Did you roll doubles? "+rolledDoubles);
}