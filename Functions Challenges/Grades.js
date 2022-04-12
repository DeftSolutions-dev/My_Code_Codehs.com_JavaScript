function start(){
	latterGrade(100);
	latterGrade(83);
	latterGrade(68);
	latterGrade(91);
	latterGrade(47);
	latterGrade(79);
}
function latterGrade(scr){
    var grade;
    if(scr <=59){
        grade="F";
    }else if(scr >= 60 && scr <= 69){
        grade="D+";
    }else if(scr >= 70 && scr <=79){
        grade="C+";
    }else if(scr >= 80 && scr <=89){
        grade="B";
    }else if(scr >= 90 && scr <=99){
        grade="A-";
    }else if(scr <= 100){
        grade="A+";
    }println(grade);
}