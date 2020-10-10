//KeyPressed event function

var pressed = false;
var colors = [];

function setup () {
  createCanvas ( 800,300);
  background (0);
  colors = [
  [63, 184, 175],
  [127, 199, 175],
  [218, 216, 167],
  [255, 158, 157],
  [255, 61, 127],
  [218, 184, 63]
 ];
  noStroke ();
  
}

function draw () {
  if (pressed === true) {
    var randomIndex = parseInt(random(colors.length), 10);
    //parseInt floating point number into a interger.
    //10 refer to secondary argument which define or specifiies the numeric base that is working in.
    //console.log (randomIndex);
    var randomSize = random(200);
    
    fill (colors[randomIndex]);
    ellipse (random(width), random(height), randomSize, randomSize);
  }
  pressed = false;
  
}
  
function keyPressed () {
  pressed = true;
  
}
