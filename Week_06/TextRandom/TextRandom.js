const letters = 'ábcdefghijklmnopqrstuvwyz0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ{};:<>,.?/';
var rand;
var listLength;

function setup() {
createCanvas (windowWidth, windowHeight);
background (255);
textSize(24);
noStroke();
textFont();
//frameRate (5);
listLength = letters.length;
}


function draw() {
rand = int(random(0, listLength-1));
fill (0);
textSize(random(5,50)); // (min,max) size
text (letters[rand], random (width), random(height));
//background (255,2);
fill (255);
ellipse (mouseX,mouseY,150,150);

}
