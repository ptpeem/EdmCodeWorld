//array words
//RemainderOperator (%) = given two values, remainder perator returns the remainder left over when the value on the first value on the left is divided by second value on the right.

var words = ['While,', 'noSuccess', 'tryAgain.', 'If,', 'dead' ,'Break']; //array words

var colors = [ 
  [63, 184, 175],
  [127, 199, 175],
  [218, 216, 167],
  [255, 158, 157],
  [255, 61, 127],
  [218, 184, 63]
 ]; //array-colors

var textfill = [255, 100, 200, 100, 225, 200]; //array-text-colors

function setup () {
  
  createCanvas (800,300);
  textAlign(CENTER,CENTER)
  frameRate (3);  //three time per second.
}

function draw () {
  
  var currentIndex = frameCount % words.length; //Framecount devided by the words array
  var currentColor = colors[currentIndex];
  var currentWord = words[currentIndex]; //'W'ord refer to WORD while words refer to words-array
  var currentFill = textfill [currentIndex];
  
  //console.log(currentIndex) // check if its working or not
  
  background(currentColor);
  
  fill(currentFill);
  textSize(45);
  text(currentWord, width / 2, height / 2);
}
