function preload() {
  //Ensure the .tff or .otf font stored in the assets directly
  //is loaded before setup () and draw () are called
  RalewayRegular = loadFont ('data/Raleway-Regular.otf');
  AcaslonProBold = loadFont ('data/AcaslonPro-Bold.otf');

}

function setup() {
  createCanvas (600,600);
  background (220);
  fill (0);
  textSize (32);
  textFont (RalewayRegular); //('Raleway-Regular.otf',32)
  textAlign (CENTER)

}

function draw() {
  
textSize(32);
  textFont(RalewayRegular);
  text ('taquila', 300,300);
  textSize(60);
  textFont(AcaslonProBold);
  text ('taste good', 300,100);
  textSize(32);
  textFont(RalewayRegular);
  text ('with salt', 300,250);


} 
