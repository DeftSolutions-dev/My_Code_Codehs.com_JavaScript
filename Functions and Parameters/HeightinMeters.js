var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
	convertHeightToMeters(6,4);
	convertHeightToMeters(5,8);
	convertHeightToMeters(5,2);
}
function convertHeightToMeters(feet,inches){
    var feetToInches =feet*FEET_TO_INCHES+inches;
    var inchesToCM =feetToInches*INCHES_TO_CM;
    var CMToMeters =inchesToCM*CM_TO_METERS;
    println(feet+" feet, " + inches + " inches = " + CMToMeters + " meters.");
}