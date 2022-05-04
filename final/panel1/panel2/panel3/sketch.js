
function preload(){
  img = loadImage("hand/mega-creator.png");
}
function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  //stores mouse vertical movement 
  let change = mouseY;
  background('#a2fffb');
    //initializes hand image  
    image(img,windowWidth/4,0,windowWidth/2,windowHeight); 
    textSize(40);
    fill('#ed2b32')
    text('all the courage that lives in your hands, all the fear',windowWidth/4,8*windowHeight/10);
    
  //if user moves mouse toward the bottom of the screen next line appears
if(change > windowHeight/2){
  background('#ed2b32');
  fill('#a2fffb');
  textSize(40);
  text('that you stand on every day',3*windowWidth/8,2*windowHeight/10);
  }

}