function preload(){
  img = loadImage('images/branchesfinal.png');
  img2 = loadImage('images/gloom.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
 

}

function draw() {
  background('#ed2b32');
  //stores mouse horizontal movement
  let grow=mouseX;
  
//if statesments reveal more of the image as the user move mouse towars right of the screen
  if (grow>windowWidth/10){
  image(img, 0, windowHeight/10, windowWidth/10, windowHeight,0,0,img.width/10,img.height); 
      
  }
  if (grow>(2*windowWidth/10)){
    image(img, windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,img.width/10,0,img.width/10,img.height);
    textSize(48);
    text('you are a tree called beauty, strong',2*windowWidth/10, 5*windowHeight/100);
    
  } 
  if (grow>(3*windowWidth/10)){
    image(img, 2*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,2*img.width/10,0,img.width/10,img.height); 
          
  } 
  if (grow>(4*windowWidth/10)){
    image(img, 3*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,3*img.width/10,0,img.width/10,img.height); 
            
  } 
  if (grow>(5*windowWidth/10)){
    image(img, 4*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,4*img.width/10,0,img.width/10,img.height); 
            
  } 
  if (grow>(6*windowWidth/10)){
    image(img, 5*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,5*img.width/10,0,img.width/10,img.height);
    textSize(48);
    text('you are branches',30*windowWidth/100, 40*windowHeight/100);         
  }
  if (grow>(7*windowWidth/10)){
    image(img, 6*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,6*img.width/10,0,img.width/10,img.height); 
            
  }
  if (grow>(8*windowWidth/10)){
    image(img, 7*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,7*img.width/10,0,img.width/10,img.height); 
            
  }
  if (grow>(9*windowWidth/10)){
    image(img, 8*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,8*img.width/10,0,img.width/10,img.height); 
            
  }
  if (grow>(95*windowWidth/100)){

    image(img, 9*windowWidth/10, windowHeight/10, windowWidth/10, windowHeight,9*img.width/10,0,img.width/10,img.height);
    
    //for(i=0;i<=windowWidth; i = i+windowWidth/40){ 
      //line(i,0,i,windowHeight);
    //}
    //for(i=0;i<=windowHeight; i = i+windowHeight/40){ 
      //line(0,i,windowWidth,i);
    //}
    //when user reaches the end a flower blooms corresponding to the final line on this page.
    image(img2,59*windowWidth/80,(16*windowHeight)/40,8*windowWidth/40,8*windowWidth/40,6*img2.width/20,5*img2.height/20,9*img2.width/40,6*img2.height/20);
    textSize(48);
    text('flung wide open, filled',20*windowWidth/100, 80*windowHeight/100);       
  }    
}