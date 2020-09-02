function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,0);
  noStroke();
  fill(0,153,76);
  rect(100, 100, 200, 200);
  
  stroke(255,128,0);
  strokeWeight(30);
  line(100,100,100, 300);
  line(100,100,300,100);
  line(100,300,300,300);
}
