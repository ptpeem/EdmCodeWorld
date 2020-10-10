//**Changing black to white
//var col = 0;

//*Combined moving circle
//var circle1 = {
  //x: 10,
  //y: 200,
  //diameter:50
//};

// Changing RGB colour
var r = 0;
var g = 10;
var b = 225;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  
  // Changing RGB colour
  r = map(mouseX, mouseY, 600, 0, 255);
  g = map(mouseX, mouseY, 600, 0, 255);
  b = map(mouseX, mouseY, 600, 255, 0);
  background (r, g, b);
  
  //**Changing black to white
  //col = map(mouseX, mouseY, 600, 0, 255);
  //background (col);
  
  // ellipse
 
//*Combined moving circle 
  //r = map(mouseX, mouseY, 0, 600, 0);
  //g = map(mouseX, mouseY, 600, 0, 255);
  //b = map(mouseX, mouseY, 600, 0, 255);
  //fill (r, g, b);

//*Combined moving circle  
  //ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  
  fill(250, 118, 222);
  ellipse(mouseX, mouseY, 100, 100);
  //rect(mouseY, 200, 64, 64);

//*Combined moving circle
  //circle1.x = circle1.x + 1;
}
