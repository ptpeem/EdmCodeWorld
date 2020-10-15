// **What?
// Game : GLITCHSPEAK - game logic for reading
// Design by : Peem Thaugsuban
// Reflecting back base on the theory of : "Creating the Perfect Glitch using critical media aesthetic”, from the book called “The Glitch Moment (Um)” by Rosa Menkman.
// Key passage from the text : Within the constructed ruins of glitch, new possibilities and new meaning arise. There is something more than just destruction: new understandings lie just beyond the tipping point. The glitch generates new understanding of techno-culture through the gestations of Glitchspeak, glitch’s constantly growing vocabulary of new expressions.
// key quote from the text : The absence of meaning its in this case the presence of all meanings, absolute ambiguity, a construction outside meaning.

// **Why?
// The purpose of this “ Game logic for reading “ is to encourage users to have fun playing while also be able to learn and read the meanings from the chosen text.
// To find the meanings of creating "THE PERFECT GLITCH". Try match the right “Keys” of the first alphabet of each words display on the screen
// If the users match the right keys before the new words show up on the screen, they will be rewarded with the meanings of what it means by “Creating the perfect glitch using critical media aesthetic”
// Else, if the users match the wrong keys. The meaning will not arise but error messages will be display instead and if the users match the keys wrong three times the game will over. 

// **Where?
// Learning Javascript knowledges credits to :
// "Studio-time" lectured - by Andy Simionato and Karen Ann Donnachie @ RMIT 2020
// "Udemy online learning" platform “Coding for visual learners : Learning JavaScript From Scatch’ - created by Engineerings Arslan.
// "Youtube Channel " - The coding train channel - created by Daniel Shiffman.
// https://p5js.org/reference/ - created by Lauren McCarth

// **How?
// Understanding the text, created the Paper-prototype & Digital-prototype, created pseudo code, learn and experimenting with code, building : creating object, animating text, develop player interaction, apply player feedback and improving user experience.
// Applied Javascript : functions, operators, variables,  frameCount, conditionals, if/else block, keypressed, loop, random, return keyword, object methods, the “this” keyword, array, array.length, translate, push/pop, text adjustment, scale, alpha and map. 
// Reflecting on orginal theory from the book : through the gameness, animations, randomness, colours, shapes, layout, layers and typography. 
// Inspired by Pachinko game style.

var guessItem = null;
// to adjust everything in the guessItem
var interval = 250;
// to adjust the speed of the scale
var results = [];
// to make the game stop after the set amounts of correct or wrong guesses.
var solution = null;
// true or false the value is empthy
var gameOver = false;

//var gameSound;
//var yahooSound;
//var ohnoSound;
//var enterSound;
//var meaningSound;
//var startEndSound;

//function preload (){
    
    //yahooSound = loadSound('Sound/YAHOOTrueMessage.mp3');
    //ohnoSound = loadSound('Sound/OHNOFalseMessage.mp3');
    //gameSound = loadSound('Sound/GameSound.mp3');
    //enterSound = loadSound('Sound/Enterbutton.mp3');
    //meaningSound = loadSound('Sound/MeaningSound.mp3');
    //startEndSound = loadSound('Sound/StartEndGameSound.mp3');

//}

function setup() {

  createCanvas(windowWidth, windowHeight);
  //textAlign (CENTER,CENTER); //translated
  // gameSound.play();
  //gameSound.loop ();
}

function draw() {


  var gameScore = getGameScore(results);
  //console.log (gameScore);

  //displayGameOver (results);
  //return ; 

  if (gameScore.loss === 3 || gameScore.total === 6) {
    displayGameOver(gameScore);
    gameOver = true;
    //if this block executing = the game is over  
    //startEndSound.play();
    return;
  }

  // (Loss become = 3 this will get triggered whenever losses become 3 immediately). (And whenever the total of the attemts become = to 6 then "RETURN").


  background(random(50));

  if (frameCount === 1 || frameCount % interval === 0) {

    // generate word content variable from frameCount
    var wordContent = 0;
    if (frameCount === 1) {
      wordContent = 0;
    } else {
      wordContent = (frameCount / interval) % 6;
    }
    // generating number every the number of frames
    // ** [Next]  Changing to words
    solution = null; //null = antevalaue essentially.
    print('wordContent ' + wordContent);
    guessItem = new GuessItem(windowWidth / 2, windowHeight / 2, 6, wordContent);

    // Shorten-version
    //content = parseInt (random (6), 6); * Full-version
    //getting integer from random function

  }
  if (guessItem) {

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
    solutionMessage(gameScore.total, solution);

  }
}
// Neither true or flase this background will go back to orinal color background color


function solutionMessage(seed, solution) {
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
  
  push();
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(225);
  randomSeed(seed * 10000);


  if (solution === true) {
    background(0);
    messages = trueMessages;
    //yahooSound.play();
  } else if (solution === false) {
    background(0);
    messages = falseMessages;
    //ohnoSound.play();
  }

  translate(windowWidth / 2, windowHeight / 2);
  text(messages[parseInt(random(messages.length), 10)], 0, 0);
  randomSeed();
  pop();
}

function displayGameStart () {

  //displayed gameover & user-score
  //promb user to press the key to "Restart or to begining page"
  //the game restart when pressed enter

  var glitch = random(3);
  var glitchx = random(2);
  var alternatingValue = map(sin(frameCount / 10), -1, 1, 0, 255);
  //sine function = continous value, the results that would be returned from the sine function will be continous in between the range -1 and 1.
  // MapFunction = Give an input value and given the min&max that this input value can get and it maps the output value in between min&max value.
  
  
  push(); //apply translate function to positioning
  background(random(50));
  textAlign(windowWidth / 2, windowHeight / 3);
  translate(windowWidth / 2, windowHeight / 3);

  //YOU HAVE LEARNT 

  textSize(24);
  translate(0, 55);
  fill(255, 0, 0, alternatingValue); //red
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); //green
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); //blue
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 6 - glitch, 6.5);
  fill(255, alternatingValue); //white
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 2 + glitchx, 7.5);

  //CREATING THE " PERFECT GLITCH "

  textSize(24);
  translate(0, 35);
  fill(255, 0, 0, alternatingValue); //red
  text('CREATING THE " PERFECT GLITCH.', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); // green
  text('CREATING THE" PERFECT GLITCH.', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); // Blue
  text('CREATING THE" PERFECT GLITCH.', 6 - glitch, 6.5);
  fill(255, alternatingValue); // White
  text('CREATING THE" PERFECT GLITCH.', 2 + glitchx, 7.5);
  
  //PLAIN

  fill(255);
  textSize(14);
  translate(0, 55);
  text('The absence of meaning in this case the presence of all meanings,', 0, 0);
  fill(255);
  textSize(14);
  translate(0, 25);
  text('absolute ambiguity, a construction outside meaning.', 0, 0);

  //PRESS ENTER 

  textSize(18);
  translate(0, 45);
  fill(255, 0, 0, alternatingValue); // red
  text('PRESS ENTER TO TRY AGAIN', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); // green
  text('PRESS ENTER TO TRY AGAIN', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); // blue
  text('PRESS ENTER TO TRY AGAIN', 6 - glitch, 6.5);
  fill(255, alternatingValue); // wlue
  text('PRESS ENTER TO TRY AGAIN', 8 - 2 + glitchx, 7.5);
  pop();
}

function displayGameOver(score) {

  //displayed gameover & user-score
  //promb user to press the key to "Restart or to begining page"
  //the game restart when pressed enter

  var glitch = random(3);
  var glitchx = random(2);
  var alternatingValue = map(sin(frameCount / 10), -1, 1, 0, 255);
  //sine function = continous value, the results that would be returned from the sine function will be continous in between the range -1 and 1.
  // MapFunction = Give an input value and given the min&max that this input value can get and it maps the output value in between min&max value.
  
  
  push(); //apply translate function to positioning
  background(random(50));
  textAlign(CENTER, CENTER);
  translate(windowWidth / 2, windowHeight / 3);

  //YOU HAVE LEARNT 

  textSize(24);
  translate(0, 55);
  fill(255, 0, 0, alternatingValue); //red
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); //green
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); //blue
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 6 - glitch, 6.5);
  fill(255, alternatingValue); //white
  text('YOUR HAVE LEARNT ' + score.win + ' MEANING TO ', 2 + glitchx, 7.5);

  //CREATING THE " PERFECT GLITCH "

  textSize(24);
  translate(0, 35);
  fill(255, 0, 0, alternatingValue); //red
  text('CREATING THE " PERFECT GLITCH.', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); // green
  text('CREATING THE" PERFECT GLITCH.', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); // Blue
  text('CREATING THE" PERFECT GLITCH.', 6 - glitch, 6.5);
  fill(255, alternatingValue); // White
  text('CREATING THE" PERFECT GLITCH.', 2 + glitchx, 7.5);
  
  //PLAIN

  fill(255);
  textSize(14);
  translate(0, 55);
  text('The absence of meaning in this case the presence of all meanings,', 0, 0);
  fill(255);
  textSize(14);
  translate(0, 25);
  text('absolute ambiguity, a construction outside meaning.', 0, 0);

  //PRESS ENTER 

  textSize(18);
  translate(0, 45);
  fill(255, 0, 0, alternatingValue); // red
  text('PRESS ENTER TO TRY AGAIN', 8 - glitch, 9.5);
  fill(0, 255, 0, alternatingValue); // green
  text('PRESS ENTER TO TRY AGAIN', 4 + glitch, 7.5);
  fill(0, 0, 255, alternatingValue); // blue
  text('PRESS ENTER TO TRY AGAIN', 6 - glitch, 6.5);
  fill(255, alternatingValue); // wlue
  text('PRESS ENTER TO TRY AGAIN', 8 - 2 + glitchx, 7.5);
  pop();
}

function getGameScore(score) {
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
    } else {
      // another time item is equivalent to false (loose) +1 
      losses = losses + 1;
    }
  }

  return {
    win: wins,
    loss: losses,
    total: total
  };
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
      console.log('restart the game');
      restartTheGame();

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
    } else {
      results.push(false);
      //every solution that has the value false is going to be push to the this array
    }

    guessItem = null;
  } else {
    //but if it is equivalent to null this will console.log nothing happen

    console.log('nothing to be solved');
  }
}

function GuessItem(x, y, scl, wordContent) {

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
  // Create to get a random number and save it = Refer to function getContent

  this.alpha = 220;

  this.alphaDecrement = 2;
  //Incre/decre the alpha transparentcy = fast/slow

  this.solved;
  //Set the property true/false

  this.contentMap = {
    '0': {key:'g', 'text':'GREMLINS'},
    '1': {key:'l', 'text':'LURKING'},
    '2': {key:'i', 'text':'IN'},
    '3': {key:'t', 'text':'THE'},
    '4': {key:'c', 'text':'COMPUTER'},
    '5': {key:'h', 'text':'HARDWARE'}
  };
  
  this.colors = [
  [255, 0,0],
  [0,255, 0],
  [255],  
  [0, 0, 255]
    
  
  ];

  //function getContent (oldNumber) { 

  // generates a random number 
  //return String(parseInt(random(6),6));
  // return a random integers 
  // String added - to opt the type of the content from number to a string ** instead of converting the type of either the input or the content.
  // }  

  this.solve = function(input) {
    print('solve ' + input + ' = ' + this.content);
    if (input == this.contentMap[this.content].key) {

      this.solved = true;

    } else {

      this.solved = false;

    }

    return this.solved;
    //return this.solved from this method so everytime when solving this can return the result to = var solution

  };

   this.drawEllipse = function (size, strkWeight, speedMultiplier, speed) {
  
  push ();
  translate (this.x, this.y);
  scale (this.scale * 0.75 * speedMultiplier);
  var clr = this.colors[parseInt(random(this.colors.length),10)];
  stroke (clr); 
   
  noFill ();
  strokeWeight (strkWeight);
  ellipse (0, 0, size, size);
  pop ();
    
  };
  
  this.render = function() {
    // A method create on this object to be called from outside of this object

    if (this.solved === false) {

      return; // not doing anything

    }
    
    this.drawEllipse (220,35,1.1, this.content * 1000);
    this.drawEllipse (160,25,1, this.content * 2000);
    this.drawEllipse (140,15,1, this.content * 1500);
    this.drawEllipse (110,5,1, this.content * 1000);
    

    var alternatingValue = map(sin(frameCount / 1), 0.5, 0.5, 0.1, 225);
    
    push();
    //Apply Translate-function reduce hhardcode here
    fill(255, alternatingValue, this.alpha);
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    //text (this.content, windowWidth/2, windowHeight/2);
    text(this.contentMap[this.content].text, 0, 0);
    this.scale = this.scale + this.scaleIncrement;
    //scale go large with this increment value
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  };
}
