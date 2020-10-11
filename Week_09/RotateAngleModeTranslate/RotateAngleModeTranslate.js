//Rotate function,angleMode(MODE),translate(amountX),(amountY)

function setup () {
  createCanvas (800,300);
  rectMode (CENTER);
  noStroke();
  angleMode (DEGREES); //Degree to do lotation
}

function draw () {  
  background (220);
  fill (237, 34, 93);
  translate (width/2, height/2);
  rotate (45);
  rect (0, 0, 50, 50);
  //translate (150, 0); 
  // translate function moves the objectfor the given x and y translation amount from the original point. = 150 to the right.
  //rotate (5);
  //rect (width/2, height/2, 50, 50);
  //rect (width/2+50, height/2+50, 50, 50);

}
