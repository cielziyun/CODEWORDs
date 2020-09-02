var circleX=0,r=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100,0,100);
  noStroke();
  fill(255,0,0,90);
  ellipse(circleX,200,r,r);
  circleX=circleX+1;
  r=r+1;
}
