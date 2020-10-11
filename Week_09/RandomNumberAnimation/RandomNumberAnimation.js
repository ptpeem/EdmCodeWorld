var guessItem; 
// added global variable to adjust everything in the guessItem
var interval = 200;
// added global variable to adjust the speed of the scale

function setup() { 
  createCanvas (windowWidth, windowHeight);
  //textAlign (CENTER,CENTER); //translated
}

function draw () {
  background (220);
  if (frameCount === 1 || frameCount % interval === 0) {    
   // generating number every the number of frames
  
    guessItem = new GuessItem(windowWidth/2, windowHeight/2, 10);// Shorten-version
  //content = parseInt (random (10), 10); * Full-version
}
  //getting integer from random function
  
  guessItem.render();
  //textSize (32); * Full-version
  //text (content,windowWidth/2, windowHeight/2); * Full-version
}

function GuessItem (x, y, scl) { 
  //Class = take three arguments x, y , and scalability position

  this.x = x; //argument inside the object using this key word
  this.y = y; //argument inside the object using this key word
  this.scale = scl; //argument inside the object using this key word
  this.scaleIncrement = 0.2; 
  //Added scale animation to incre/decre the timing and the motion.
  this.content = getContent ();
  // Create to get a random number and save it = Refer to function getContent
  this.alpha = 220 ;
  this.alphaDecrement = 3;
  //Incre/decre the alpha transparentcy = fast/slow
  
  function getContent () { 
  //this function generates a random number 
    return parseInt (random (10), 10,);
  // return a random integers 
  }  
  
  this.render = function() {
  // A method create on this object to be called from outside of this object
    push (); //Apply Translate-function reduce hardcode here
    fill (0, this.alpha);
    textAlign (CENTER,CENTER);
    translate (this.x, this.y);
    scale (this.scale); 
    //text (this.content, windowWidth/2, windowHeight/2);
    text (this.content, 0, 0);
    this.scale = this.scale + this.scaleIncrement; 
    //scale go large with this increment value
    this.alpha = this.alpha - this.alphaDecrement;
    pop ();
  }
}
