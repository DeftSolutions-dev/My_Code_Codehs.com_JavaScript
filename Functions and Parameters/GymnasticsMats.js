function start() {
    var widthMat = readInt("What is the width of the mat in feet?");
    var lengthMat = readInt("What is the length of the mat in feet?");
    var areaMat = calculateArea(widthMat,lengthMat);
    var widthRoom = readInt("What is the width of the room in feet?");
    var lengthRoom = readInt("What is the length of the room in feet?");
    var areaRoom = calculateArea(widthRoom,lengthRoom);
    var matTotal = areaRoom/areaMat;
    println("You will need " +matTotal+" mats to cover the room");
}
// This function should calculate the area of a rectangle using
// the parameters of width and length.
function calculateArea(width, length){
    var area = width*length;
    return area;
}