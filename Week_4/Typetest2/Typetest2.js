function preload() {
  //Ensure the .tff or .otf font stored in the assets directly
  //is loaded before setup () and draw () are called
  RalewayMedium = loadFont ('data/Raleway-Medium.otf');

}
var spin=90;
var letterSize=24;

function setup() {
  createCanvas (600,600);
  background (220);
  fill (0);
  //angleMode (DEGREES);
  //textSize (32);
  //textFont (RalewayMedium); //('RalewayMedium.otf',32)
  textAlign (CENTER)
  frameRate(15);

}

function draw() {
  fill (0); //text ink color!
  translate (300,300);
  rotate (spin);
  textSize(letterSize);
  textFont(RalewayMedium);
  text ('CURIOUSITY KILL PUSSY', 0,0);
  spin+=map(mouseX,0,600,-3,3); //this will make the mouseX affect the spin direction and speed
  letterSize=map(mouseY,0,600,8,72)
  //spin+=int(mouseX/50-300);
  stroke(0);
  fill (240,30); //shade of grey & alpha value
  rect (100,100,500,500)
  pop ();
  background (240,30) ;

} 
