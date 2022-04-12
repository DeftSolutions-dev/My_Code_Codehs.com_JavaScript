var min = 0;
var max = 100;
var num = 1;
var gg = Randomizer.nextInt(min,max);
function start() {
    println("This program plays a guessing game.\nThe computer is thinking of a value between 0 and 100.\nType '-1' to exit the program.");
     while(num >= 1){
         num = readInt("What is your guess? ");
         if(num != gg && num > gg){
             println("Your guess was too high!");
         }else if(num != gg && num < gg){
             println("Your guess was too low!");
         }else if(num != gg && num == gg){
             break;
         }
     }
     println("Correct!!!\nGame has concluded!");
}