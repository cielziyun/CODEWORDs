var spot={x:50,y:50};
    col={r:255,g:255,b:0};

function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  spot.x=random(0,width);
  spot.y=random(0,height);
  col.r=random(0,255);
  col.g=random(0,255);
  noStroke();
  fill(col.r,col.g,col.b,90);
  ellipse(spot.x,spot.y,50,50);
}
