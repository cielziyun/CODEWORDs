var fade;
var fadeAmount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textSize (24);
  noStroke();
  textFont("Futura");
  textAlign(CENTER);
  fill(0);
  fade = 1;
}

02
function draw() {
  background(255);
  fill(0, 0, 0,fade);
  text("Hackers create the possibility of new things entering the world",650,350);
  
  if (fade<0) fadeAmount=1; 
  fade += fadeAmount; 
  
}
