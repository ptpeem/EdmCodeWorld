//array
//array .lenght = inclusdes all the 'values' inside the array
//array .push = pushing the value inside the array


//var size1 = 200;
//var size2 = 150;
//var size3 = 100;
//var size4 = 50;
//var size5 = 25;

//var sizes = [200, 150, 100, 50, 25, 10, 5]; // array

var sizes = [];// emthy size array, populate with random number

function setup() {
  createCanvas (800, 300);

  for (var i=0; i<100; i++) {
    var randomValue = random (5,500); //random size 5-500
    sizes.push (randomValue); //.push = pushing that random value inside the "siezes array"
    
  }
}
 
function draw () {
  
  background (220);
  noFill();
  strokeWeight(2);
  
  //ellipse (width/2, height/2, sizes[0], sizes[0]);
  //ellipse (width/2, height/2, sizes[1], sizes[1]);
  //ellipse (width/2, height/2, sizes[2], sizes[2]);
  //ellipse (width/2, height/2, sizes[3], sizes[3]);
  //ellipse (width/2, height/2, sizes[4], sizes[4]);
  
  // for (var i = 0; i < 5; i++) { // loop shorten it above
  
  for (var i = 0; i < sizes.length; i++) { //array.length
    ellipse(width/2, height/2, sizes[i], sizes[i]);
  }   
}
