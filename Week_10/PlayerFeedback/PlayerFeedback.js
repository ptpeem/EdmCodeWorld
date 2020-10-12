// *Game : Typing the right words appear on the screen to understand the meaning of "Glitch"

var guessItem = null;
// added global variable to adjust everything in the guessItem
var interval = 100;
// added global variable to adjust the speed of the scale
var results = [];
// added gloval variable inorder to make the game stof after the set amounts of correct or wrong guesses.
var solution = null; 
// added global variable to adjust the background colors if the number is wrong.
// Null = true or false the value is empthy 

//solve-method = received an input from outside of the user-pressed key,and check whether this recieved input is equal to the content inside (ture/false = match/not-match).

function setup() { 
    
      createCanvas (windowWidth, windowHeight);
        //textAlign (CENTER,CENTER); //translated
      }

function draw () {
  
      
      //console.log(sin(frameCount));
      //sine function = continous value, the results that would be returned from the sine function will be continous in between the range -1 and 1.
      //Changed since to "MapFunction"
  
      var gameScore = getGameScore(results);
      //console.log (gameScore);
  
      //displayGameOver (results);
      //return ; 
        
      
      if (gameScore.loss === 3 || gameScore.total === 10) {
      displayGameOver (gameScore);
      return;
      }
      
      // (Loss become = 3 this will get triggered whenever losses become 3 immediately). (And whenever the total of the attemts become = to 10 then "RETURN").
        
        
    
  
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
        // if the guessItem exists and then call the render method on it
      }
      

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

function displayGameOver (score) {
      //displayed gameover & user-score
      //promb user to press the key to "Restart or to begining page"
      //the game restart when pressed enter

      push (); //apply translate function to positioning
      background (255);
      textAlign (CENTER, CENTER);
      translate (windowWidth/2, windowHeight/2);

      fill (237,34, 93);
      textSize (24);
      text ('GAME OVER!', 0, 0);

      fill (0);
      translate (0, 45);
      text ('You have ' + score.win + ' correct guesses',0 ,0);

      var alternatingValue = map(sin(frameCount / 10),-1, 1, 0, 255);
      //sine function = continous value, the results that would be returned from the sine function will be continous in between the range -1 and 1.
      // MapFunction = Give an input value and given the min&max that this input value can get and it maps the output value in between min&max value.
      
      
      fill (237,34,93, alternatingValue);
      textSize (18);
      translate (windowWidth/windowWidth, windowHeight/6);
      //text.position (width-400, height-500);
      text ('PRESS ENTER',0, 0);
      pop(); 
    }

function getGameScore(score){
      //get the value of the results array and evaluate it to see user's score.

      var wins = 0;
      var losses = 0;
      var total = score.length;

      for (var i = 0; i < total; i++) {
      // Loop : i = to 0, i smaller than total (score.lenght), and i incre by 1 every times this for loop iterates.
        
      var item = score[i];
      // item going the current item inside the iteration.
      
      if (item === true) {
      // everytime item is equivalent to true (win) + 1  
        wins = wins + 1;
      }
        
      else {
      // another time item is equivalent to false (loose) +1 
        losses = losses + 1;
      }      
  }
      
      return {win: wins, loss: losses, total: total};
      // amount of wins, amount of lost, amount of total

  }

function keyPressed() {
      //console.log (results);
  
      if (guessItem !== null) { 
      // if the guessItem object is not equivalent to null all the things below will be executing
       
        console.log('you pressed', key);
        
        solution = guessItem.solve(key);
      
      if (solution) {
        results.push(true);
        //every solution that has the value true is going to be push to the result array
      }
        
      else {
        results.push (false);
        //every solution that has the value false is going to be push to the this array
      }  
   
        guessItem = null;
      } 
  
      else {
        //but if it is equivalent to null this will console.log nothing happen
        
        console.log ('nothing to be solved');
      }
  }
  
function GuessItem (x, y, scl) { 
      
      //Class = take three arguments x, y , and scalability position
      
      this.x = x; 
      //argument inside the object using this key word
      
      this.y = y; 
      //argument inside the object using this key word
      
      this.scale = scl; 
      //argument inside the object using this key word
      
      this.scaleIncrement = 0.2; 
      //Added scale animation to incre/decre the timing and the motion.
      
      this.content = getContent ();
      // Create to get a random number and save it = Refer to function           getContent
     
      this.alpha = 220 ;
      
      this.alphaDecrement = 2;
      //Incre/decre the alpha transparentcy = fast/slow
      
      this.solved;
      //Set the property true/false 
    
function getContent () { 
      
      //this function generates a random number 
      
      return String(parseInt (random(10), 10));
      // return a random integers 
      // String added - to opt the type of the content from number to a string ** instead of converting the type of either the input or the content.
      }  

      this.solve = function (input) {
        
    if (input === this.content){
          
      this.solved = true;
          
      }
    
    else {
          
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
        
      push (); 
      //Apply Translate-function reduce hardcode here
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
