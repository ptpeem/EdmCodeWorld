function setup() {
  createCanvas(800, 300);
}


function draw() {
  background(1, 75, 100);
  
  //citcle properties
  fill(237,34,93);
  noStroke();
  var diameter = 10;
  
  //circle
  for (var s = 0; s < width / diameter; s = s+1) {
  for (var p = 0; p < height / diameter; p = p+1) {  
    ellipse(
      diameter / 2 + s * diameter, // x
      diameter / 2 + p * diameter, // y
      diameter,
      diameter
      );
  }
  }
  
}
