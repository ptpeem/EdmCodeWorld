// Game : GLITCHSPEAK
//To find the meanings of creating "THE PERFECT GLITCH". Try to match the key to the first alphabet of each words appear on the screen.Then the meanings will appear.
// If the users Match the first Alphabet of each word display screen the meaningS will appear.
// If the users match the wrong keys the result will be something eles.


//G = [G]remlins
//L = [L]urking
//I = [I]n
//T = [T]he
//C = [C]omputer
//H = [H]ardware

var guessItem = null;
// to adjust everything in the guessItem
var interval = 100;
// to adjust the speed of the scale
var results = [];
// to make the game stop after the set amounts of correct or wrong guesses.
var solution = null; 
// true or false the value is empthy
var gameOver = false

function setup() { 
    
      createCanvas (windowWidth, windowHeight);
        //textAlign (CENTER,CENTER); //translated
      }

function draw () {
  
  
      var gameScore = getGameScore(results);
      //console.log (gameScore);
  
      //displayGameOver (results);
      //return ; 
      
      if (gameScore.loss === 3 || gameScore.total === 6) {
      displayGameOver (gameScore);
      gameOver = true; 
      //if this block executing = the game is over  
        
      return;
      }
      
      // (Loss become = 3 this will get triggered whenever losses become 3 immediately). (And whenever the total of the attemts become = to 6 then "RETURN").
        
  
      background (220);
  
      if (frameCount === 1 || frameCount % interval === 0) {   
        
      // [WORLD] generate word content variable from frameCount
        var wordContent = 0;
        if (frameCount === 1) {
          wordContent = 0;
        } else {
          wordContent = (frameCount / interval) % 6;
        }
      // generating number every the number of frames
      // ** [Next]  Changing to words
        solution = null; //null = antevalaue essentially.
        guessItem = new GuessItem(windowWidth/2, windowHeight/2, 6, wordContent);
      
      // Shorten-version
      //content = parseInt (random (6), 6); * Full-version
      //getting integer from random function
    
  }    
      if (guessItem){
        
        guessItem.render();
        // if the guessItem exists and then call the render method on it
      }
      

      //guessItem.render();
      //textSize (32); * Full-version
      //text (content,windowWidth/2, windowHeight/2); * Full-version

      //if (solution === true) {
        //background (225);
      //}
      
      //else if (solution === false) {
        //background (0);  
      //}
      
      if (solution === true || solution == false) {
        solutionMessage(solution); 
        
      }
  }
      // Neither true or flase this background will go back to orinal color background color


function solutionMessage (solution){
      //display these messages if the solution is true/false
  
  var trueMessages = [
    
    'ABSENCE : The absence of meaning in this case the presence of all meanings.',
    
    'MEANING : Presence of all meanings, absolute ambiguity, a construction outside meaning.',
    'CONSTRUCT: Within the constructed ruins of glitch, new possibilities and new meaning arise.',
    'DESTRUCT : There is something more than just destruction: new understandings lie just beyond the tipping point.',
    'GENERATE : The glitch generate new understanding of techno-culture through the gestations of “Glitchspeak “.',
    'EXPRESSION : Glitchspeak, glitch’s constantly growing vocabulary of new expressions.'
    
  ];

  var falseMessages = [
   
      'ERROR 404!',
      'YOU WILL SURVIVE!',
      'TRY AGAIN!',
      'OH NO!'  

      ];

      var messages;

      push ();

      if (solution === true) {
        messages = trueMessages;   
      } else if (solution === false){
        messages = falseMessages;    
      }
      textAlign (CENTER,CENTER);
      translate (windowWidth/2, windowHeight/2)
      text (messages [parseInt (random(messages.length),10)], 0, 0) ; 
      pop ();
    }

function displayGameOver (score) {
      
  //displayed gameover & user-score
      //promb user to press the key to "Restart or to begining page"
      //the game restart when pressed enter

      var glitch = random(3);
      var glitchx = random (2);
      var alternatingValue = map(sin(frameCount / 10),-1, 1, 0, 255);
      //sine function = continous value, the results that would be returned from the sine function will be continous in between the range -1 and 1.
      // MapFunction = Give an input value and given the min&max that this input value can get and it maps the output value in between min&max value.
  
      push (); //apply translate function to positioning
      background (0);
      textAlign (CENTER, CENTER);
      translate (windowWidth/2, windowHeight/3);

//YOU HAVE LEARNT 
  
      textSize (24);
      translate (0, 55);
      fill (255, 0, 0, alternatingValue); //red
      text ('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ',8 - glitch, 9.5);
      fill (0, 255, 0, alternatingValue); //green
      text ('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ',4 + glitch, 7.5);
      fill (0, 0, 255, alternatingValue); //blue
      text ('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ',6 - glitch, 6.5);
      fill (255, alternatingValue); //white
      text ('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ',2 + glitchx, 7.5);
  
//CREATING THE " PERFECT GLITCH "
  
      textSize (24);
      translate (0, 35);
      fill (255, 0, 0, alternatingValue);//red
      text ('CREATING THE " PERFECT GLITCH.', 8 - glitch, 9.5);
      fill (0, 255, 0,alternatingValue);// green
      text ('CREATING THE" PERFECT GLITCH.', 4 + glitch, 7.5);
      fill (0, 0, 255,alternatingValue); // Blue
      text ('CREATING THE" PERFECT GLITCH.', 6 - glitch, 6.5);
      fill (255,alternatingValue); // White
      text ('CREATING THE" PERFECT GLITCH.', 2 + glitchx, 7.5);

//PLAIN
  
      fill (255);
      textSize (14);
      translate (0, 55);
      text ('The absence of meaning in this case the presence of all meanings,', 0, 0);
      fill (255);
      textSize (14);
      translate (0, 25);
      text ('absolute ambiguity, a construction outside meaning.', 0, 0);

//PRESS ENTER 
  
      textSize (18);
      translate (0,45);
      fill (255, 0, 0, alternatingValue);// red
      text ('PRESS ENTER TO TRY AGAIN', 8 - glitch, 9.5);
      fill (0, 255, 0, alternatingValue);// green
      text ('PRESS ENTER TO TRY AGAIN', 4 + glitch, 7.5);
      fill (0, 0, 255, alternatingValue);// blue
      text ('PRESS ENTER TO TRY AGAIN', 6 - glitch, 6.5);
      fill (255, alternatingValue);// wlue
      text ('PRESS ENTER TO TRY AGAIN', 8 - 2 + glitchx, 7.5); 
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

function restartTheGame() {
  
      results = [];
      //making the result variable pont to entering the game
      solution = null;
      //it will also clear the solution variable
      gameOver = false;
      //make the gameOver variable to be false
  
}

function keyPressed() {
  
      //console.log (results);
      
      if (gameOver === true) {
        if (keyCode === ENTER) {
         console.log ('restart the game')
         restartTheGame ();
          
         return; 
     //if the game is over = true and if press enter = restart the game.
      }  
      }
  
  
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
  
function GuessItem (x, y, scl, wordContent) { 
      
      //Class = take three arguments x, y , and scalability position
      
      this.x = x; 
      //argument inside the object using this key word
      
      this.y = y; 
      //argument inside the object using this key word
      
      this.scale = 1; 
      //argument inside the object using this key word
      
      this.scaleIncrement = 0.1; 
      //Added scale animation to incre/decre the timing and the motion.
      
      this.content = wordContent;
      // Create to get a random number and save it = Refer to function           getContent
     
      this.alpha = 220 ;
      
      this.alphaDecrement = 2;
      //Incre/decre the alpha transparentcy = fast/slow
      
      this.solved;
      //Set the property true/false
  
      this.contentMap= {
      '0' : '[G]remlins',  
      '1' : '[L]urking',
      '2' : '[I]n',
      '3' : '[T]he',
      '4' : '[C]omputer',
      '5' : '[H]ardware'  
      };
    
//function getContent (oldNumber) { 
      
      // generates a random number 
      //return String(parseInt(random(6),6));
      // return a random integers 
      // String added - to opt the type of the content from number to a string ** instead of converting the type of either the input or the content.
      //}  

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
      text (this.contentMap[this.content], 0, 0);
      this.scale = this.scale + this.scaleIncrement; 
      //scale go large with this increment value
      this.alpha = this.alpha - this.alphaDecrement
      pop ();    
    }
  
  }    
