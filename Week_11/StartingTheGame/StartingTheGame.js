function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {


function startingThegame (){}
  
      var glitch = random(3);
      var glitchx = random (2);
      var alternatingValue = map(sin(frameCount / 10),-1, 1, 0, 255);
    var alternating = map(sin(frameCount / 20),-1, 1, 0, 255);
      
      push (); //apply translate function to positioning
      background (0);
      textAlign (CENTER, CENTER);
      translate (windowWidth/2, windowHeight/3);

//GLITCH SPEAK 
    
      textSize (48);
      translate (0, 55);
      fill (255, 0, 0, alternatingValue); //red
      fill (255, 0, 0, alternatingValue);//red
      text ('GLITCHSPEAK', 8 - glitch, 9.5);
      fill (0, 255, 0,alternatingValue);// green
      text ('GLITCHSPEAK', 4 + glitch, 7.5);
      fill (0, 0, 255,alternatingValue); // Blue
      text ('GLITCHSPEAK', 6 - glitch, 6.5);
      fill (255,alternatingValue); // White
      text ('GLITCHSPEAK', 2 + glitchx, 7.5);
  
//ABSENCE - MEANINGS :
  
    textSize (14);
      translate (0,55);
      fill (255, 0, 0, alternatingValue);// red
      text ('ABSENCE - MEANINGS', 8 - glitch, 9.5);
      fill (0, 255, 0, alternatingValue);// green
      text ('ABSENCE - MEANINGS', 4 + glitch, 7.5);
      fill (0, 0, 255, alternatingValue);// blue
      text ('ABSENCE - MEANINGS', 6 - glitch, 6.5);
      fill (255, alternatingValue);// wlue
      text ('ABSENCE - MEANINGS', 8 - 2 + glitchx, 7.5);

//ABSENCE - MEANINGS :
  
      textSize (14);
      translate (0,25);
      fill (255, 0, 0, alternatingValue);// red
      text ('CONSTRUCT | DESTRUCT | GENERATE | EXPRESSION', 8 - glitch, 9.5);
      fill (0, 255, 0, alternatingValue);// green
      text ('CONSTRUCT | DESTRUCT | GENERATE | EXPRESSION', 4 + glitch, 7.5);
      fill (0, 0, 255, alternatingValue);// blue
      text ('CONSTRUCT | DESTRUCT | GENERATE | EXPRESSION', 6 - glitch, 6.5);
      fill (255, alternatingValue);// wlue
      text ('CONSTRUCT | DESTRUCT | GENERATE | EXPRESSION', 8 - 2 + glitchx, 7.5);

//PLAIN
  
      fill (255);
      textSize (14);
      translate (0, 50);
      text ('To find the meanings of creating " THE PERFECT GLITCH".', 0, 0);
      fill (255);
      textSize (14);
      translate (0, 25);
      text ('Try to match the key to the first alphabet of each words appear on the screen.', 0, 0);
      fill (255);
      textSize (14);
      translate (0, 25);
      text ('Then the meanings will appear.', 0, 0);
  
//PRESS ENTER 
  
      textSize (18);
      translate (0,45);
      fill (255, 0, 0, alternatingValue);// red
      text ('PRESS ENTER TO START', 8 - glitch, 9.5);
      fill (0, 255, 0, alternatingValue);// green
      text ('PRESS ENTER TO START', 4 + glitch, 7.5);
      fill (0, 0, 255, alternatingValue);// blue
      text ('PRESS ENTER TO START', 6 - glitch, 6.5);
      fill (255, alternatingValue);// wlue
      text ('PRESS ENTER TO START', 8 - 2 + glitchx, 7.5);     
      pop ();

} 
