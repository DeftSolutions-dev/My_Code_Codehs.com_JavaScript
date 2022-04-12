// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8; // This is how far left the pupil should be from the center of the ghost
var PUPIL_RIGHT_OFFSET = 20; // This is how far right the pupil should be from the center of the ghost
var EYE_RADIUS = 10;
var EYE_OFFSET = 14; // This is how far left or right the eye should be from the center of the ghost

/* Write a comment here about your overall program */
function start(){
    drawGhost(getWidth()/2,getHeight()/2,Color.red);//Center draw Ghost
    drawGhost(100,100,Color.green);
    drawGhost(300,200,Color.black);
    drawGhost(40,300,Color.orange);
    drawGhost(300,50,Color.yellow);
}

function drawGhost(x, y, c){
    drawCircle(x,y,HEAD_RADIUS,c);                                                 //Head draw
    drawRect((x-HEAD_RADIUS),y,BODY_WIDTH,BODY_HEIGHT,c);                          //Body draw
    drawCircle((x-HEAD_RADIUS)+FOOT_RADIUS+1,y+BODY_HEIGHT,FOOT_RADIUS+1,c);       //Feet draw #1
    drawCircle((x-HEAD_RADIUS)+FOOT_RADIUS+23,y+BODY_HEIGHT,FOOT_RADIUS+1,c);      //Feet draw #2
    drawCircle((x-HEAD_RADIUS)+FOOT_RADIUS+45,y+BODY_HEIGHT,FOOT_RADIUS+1,c);      //Feet draw #3
    drawCircle(x-EYE_OFFSET,y,EYE_RADIUS,Color.white);                             //Eye-socket #1
    drawCircle((x-EYE_OFFSET)+PUPIL_LEFT_OFFSET-2,y,PUPIL_RADIUS+0.5,Color.blue);        //Pupil of the eye #1
    drawCircle(x+EYE_OFFSET,y,EYE_RADIUS,Color.white);                             //Eye-socket #2
    drawCircle((x+EYE_OFFSET)+PUPIL_LEFT_OFFSET-2,y,PUPIL_RADIUS+0.5,Color.blue);        //Pupil of the eye #2
}
function drawCircle(x,y,radius,col){
    var c = new Circle(radius);
    c.setPosition(x,y);
    c.setColor(col);
    add(c);
}
function drawRect(x,y,z,w,c){
    var r = new Rectangle(z,w);
    r.setPosition(x,y);
    r.setColor(c);
    add(r);
}