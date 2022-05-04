 //global boolean for click function 
var click = false;
function preload(){
  img = loadImage('seen.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //thickness of the lines that makeup  the face
  strokeWeight(10);
 
  
  //construct minimalist face
  line(windowWidth/2,0,windowWidth/4,windowHeight/4);
  line(windowWidth/2,0,3*windowWidth/4,windowHeight/4);
  line(windowWidth/4,windowHeight/4,windowWidth/4,windowHeight/2);
  line(3*windowWidth/4,windowHeight/4,3*windowWidth/4,windowHeight/2);
  line(windowWidth/4,windowHeight/2,windowWidth/2,3*windowHeight/4);
  line(3*windowWidth/4,windowHeight/2,windowWidth/2,3*windowHeight/4);
  line(3*windowWidth/8,windowHeight/2,5*windowWidth/8,windowHeight/2);
  line(3*windowWidth/8,windowHeight/2,7*windowWidth/16,7*windowHeight/16);
  line(5*windowWidth/8,windowHeight/2,9*windowWidth/16,7*windowHeight/16);
  line(3*windowWidth/8,windowHeight/2,7*windowWidth/16,9*windowHeight/16);
  line(5*windowWidth/8,windowHeight/2,9*windowWidth/16,9*windowHeight/16);
  line(7*windowWidth/16,9*windowHeight/16,9*windowWidth/16,9*windowHeight/16);
  line(7*windowWidth/16,7*windowHeight/16,9*windowWidth/16,7*windowHeight/16);
  line(7*windowWidth/16,13*windowHeight/32,8*windowWidth/16,13*windowHeight/32);
  line(7*windowWidth/16,13*windowHeight/32,windowWidth/2,10*windowHeight/32);
  
  textSize(40);
  text('with song',2*windowWidth/5,8*windowHeight/10);
//if user clicks the screen the final line is revealed
if(click){
  background(0);
  for(let i = 0; i <=3; i++){
    for(let j = 0; j <=3; j++){
      image(img,(i*windowWidth)/3,(j*windowHeight)/3,windowWidth/9,windowHeight/9);
    }
  }
}
}
//stores if the user clicks the screen
function mouseClicked() {
  if (click === false) {
      click = true;
  } else {
    click = false;
  }
}