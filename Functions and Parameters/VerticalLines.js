function start() {
    verticalLine(100,200);
    verticalLine(200,100);
    verticalLine(300,50);
}
function verticalLine(x,y){
    var line = new Line(x,0,x,y);
    add(line);
}