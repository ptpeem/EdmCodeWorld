// *Game : Typing the right words appear on the screen to understand the meaning of "Glitch"

var guessItem = null;
// added global variable to adjust everything in the guessItem
var interval = 100;
// added global variable to adjust the speed of the scale
var solution = null; 
// added global variable to adjust the background colors if the number is wrong.
// Null = true or false the value is empthy 

//solve-method = received an input from outside of the user-pressed key,and check whether this recieved input is equal to the content inside (ture/false = match/not-match).

function setup() { 
  createCanvas (windowWidth, windowHeight);
  //textAlign (CENTER,CENTER); //translated
}

function draw () {
  
  background (220);
  if (frameCount === 1 || frameCount % interval === 0) {    
   // generating number every the number of frames
   solution = null; //null = antevalaue essentially.
   guessItem = new GuessItem(windowWidth/2, windowHeight/2, 10);
  // Shorten-version
  //content = parseInt (random (10), 10); * Full-version
  //getting integer from random function
    
}    
  if (guessItem){
    guessItem.render();  
  }
  // if the guessItem exists and then call the render method on it
  
  //guessItem.render();
  //textSize (32); * Full-version
  //text (content,windowWidth/2, windowHeight/2); * Full-version
  
  if (solution === true) {
    background (225);
  }
    else if (solution === false) {
    background (0);  
    }
  }
  // Neither true or flase this background will go back to orinal color background color


  function keyPressed() {
  if (guessItem !== null) { 
  // if the guessItem object is not equivalent to null all the things below will be executing
    console.log ('you pressed', key);
    solution = guessItem.solve(key);
    //pass the user key-pressed (input)
    guessItem = null;  
    //solved user press-multiple keys
  } else {
    //but if it is equivalent to null this will console.log nothing happen
    console.log ('nothing to be solve');
    
  }
  
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
  this.alphaDecrement = 2;
  //Incre/decre the alpha transparentcy = fast/slow
  this.solved;
  //Set the property true/false 
    
  function getContent () { 
  //this function generates a random number 
    return String(parseInt (random(10), 10));
  // return a random integers 
  // String added - to opt the type of the content from number to a string ** instead of converting the type of either the input or the content by 
  }  
  
  this.solve = function (input) {
    if (input === this.content){
      this.solved = true;
    } else {
      this.solved = false;
    }
    return this.solved;
   //return this.solved from this method so everytime when solving this can return the result to = var solution
      
  }  
    
  this.render = function() {
  // A method create on this object to be called from outside of this object
    
    if (this.solved === false) {
      return; // not doing anything
      
    }
    push (); //Apply Translate-function reduce hardcode here
    fill (0, this.alpha);
    textAlign (CENTER,CENTER);
    translate (this.x, this.y);
    scale (this.scale); 
    //text (this.content, windowWidth/2, windowHeight/2);
    text (this.content, 0, 0);
    this.scale = this.scale + this.scaleIncrement; 
    //scale go large with this increment value
    this.alpha = this.alpha - this.alphaDecrement
    pop ();
  }
  }    
