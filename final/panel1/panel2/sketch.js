function preload(){
  //loads background
  img = loadImage("background/background2.png");
}
function setup() {
  //creates canvas
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(img);
  textSize(40);
  fill('red')
  //second line of poem
  text('how you held the light in your mouth', windowWidth/8,windowHeight/30);
  
  //stores the time since the script statyed
  let time = int(millis()/1000);
  
  //createes a sun that rise with the frame rate
  noFill();
  stroke('yellow');
  strokeWeight(8);
  //size of arc corresponds to frame rate
  arc(windowWidth/2,windowHeight,(frameCount/80)*windowWidth/2,(frameCount/80)*windowHeight/2,PI,0);

  //after 15 seconds next line appears
  if(time >= 15){
    fill('red')
    text('how you chose to grow kindness', windowWidth/8,windowHeight/2);
  }
  //after 25 seconds next line appears
  if(time >= 25){
    fill('red')
    text('instead', windowWidth/8,3*windowHeight/4);
  }
  
}