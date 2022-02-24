function setup() {
  createCanvas(400, 400);
  background(0);
  noFill();
  frameRate(10);
  stroke('cyan');
}

function draw() {
  fill('blue')
  ellipse(200, 200, frameCount*5%400)

}
