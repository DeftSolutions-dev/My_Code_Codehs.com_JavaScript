function start(){
    //Write your code here
    // Remember to ask if it is a weekday before a holiday
    var isWeekday = readBoolean("Is today a weekday? ");
    var isHoliday = readBoolean("Is today a holiday? ");
    var schoolIsOut = isHoliday || !isWeekday;
    println("Is school out today? "+schoolIsOut);
}