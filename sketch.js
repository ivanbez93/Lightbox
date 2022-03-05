var r;
var g;
var b;


function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen  0 - 255
  b = random(255); // b is a random number between 0 - 255
  
  r1 = random(255); // r is a random number between 0 - 255
  g1 = random(255); // g is a random number betwen  0 - 255
  b1 = random(255); // b is a random number between  0 - 255
  
  r2 = random(255); // r is a random number between 0 - 255
  g2 = random(255); // g is a random number betwen  0 - 255
  b2 = random(255); // b is a random number between  0 - 255

 //set rounded corner value
  rounded = 50;

  //set a scale value A
  scaleA=(0.98);
  
  //set a scale value B
  scaleB=(0.92);
  
  //set transparancy
  transparency=70;

}

function draw() {
  //Background get a random color (R, G, B)
  background(r, g, b);
  
 
  
  
//rectangle group top (positiox, postion y, height, width, corners)
  
  
//Idea to test: create 2 invisible rectangles ta relate to the canvas size, the center os thos rectangles qill be used to assign the center of the color field
  

//rectangle color field top1 (positiox, postion y, height, width, corners)
//fill property (r, g, b, alpha)


  
rectMode(CENTER);
  
  //RECT 1
  fill (r2, g2, b2, transparency); 
  noStroke(0);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.04, windowHeight/1.64, rounded);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.10, windowHeight/1.74, rounded);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.16, windowHeight/1.84, rounded);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.22, windowHeight/1.94, rounded);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.28, windowHeight/2.04, rounded);
  rect(windowWidth/2, windowHeight/3.1, windowWidth/1.34, windowHeight/2.14, rounded);



  
  //RECT 2

fill (r1, g, b1, transparency); 
  noStroke(0);
  rect(windowWidth/2, windowHeight/1.22, windowWidth/1.04, windowHeight/3, rounded);
  rect(windowWidth/2, windowHeight/1.22, windowWidth/1.10, windowHeight/3.5, rounded);
    rect(windowWidth/2, windowHeight/1.22, windowWidth/1.16, windowHeight/4, rounded);
  rect(windowWidth/2, windowHeight/1.22, windowWidth/1.22, windowHeight/4.5, rounded);
    rect(windowWidth/2, windowHeight/1.22, windowWidth/1.28, windowHeight/5, rounded);
  rect(windowWidth/2, windowHeight/1.22, windowWidth/1.34, windowHeight/5.5, rounded);
    rect(windowWidth/2, windowHeight/1.22, windowWidth/1.40, windowHeight/6, rounded);
  rect(windowWidth/2, windowHeight/1.22, windowWidth/1.46, windowHeight/6.5, rounded);
  
  

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}