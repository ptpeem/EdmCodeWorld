var words = ['Gremlins', 'Lurking', 'In', 'The', 'Computer' ,'Hardware'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign (CENTER,CENTER)
  frameRate (3);
}

function draw() {
 
  background(0);
  
  var currentIndex = frameCount % words.length;
  var currentWord = words[currentIndex];
  
  fill(225);
  textSize (32);
  text(currentWord, windowWidth / 2, windowHeight / 2 );
}
