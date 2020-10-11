//Push : creates a new state.
//Pop ; Restores the state that is created by the previous push function
//Push& Pop Functions are used togethe.

function setup () {
  createCanvas (800,300);
  rectMode (CENTER);
  noStroke();
  angleMode (DEGREES); //Degree to do lotation
  
  
}

function draw () {  
  background (220);
  fill (237, 34, 93);
  
    //translate (150, 0); 
  // translate function moves the objectfor the given x and y translation amount from the original point. = 150 to the right.
  //rotate (5);
  //rect (width/2, height/2, 50, 50);
  //rect (width/2+50, height/2+50, 50, 50);
  
  push ();
  translate (width/2, height/2);
  rotate (90);
  rect (0, 0, 150, 150);
  pop();
  
  //push ();
  //translate( width/2, height/2);
  //rotate (30);
  //fill (255);
  //rect (0, 0, 75, 75);
  // pop();
  
  fill (255);
  rectC (width/2, height/2, 75, 75, 45); 
  // number 30 is to define the rotation 0 < n rotation will happen
  
function rectC (x, y, width, height, rotation) {
  if (rotation === undefined) {
  rotation = 0;
}  
  
  push ();
  translate (x, y);
  rotate (rotation);
  rect (0, 0, width, height);
  pop ();
  }
}
