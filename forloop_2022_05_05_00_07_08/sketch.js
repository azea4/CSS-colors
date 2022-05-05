function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(0);
  //creates sequence of circles with decreasing radius
  for(let i = 300;i >= 0; i -= 20){
    
    //fills circle with random color
    fill(random(255),0,random(255));
    //creates circle with diameter i
    circle(200,200,i);
  }
}