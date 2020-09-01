var myText= "a double spooks the world, the double of abstraction. The fortunes of states and armies, companies and communities depend on it. All contending classes, by they ruling or ruled; revere it-yet fear it. Ours is a world that vertures blindly into the new with its fingers acrossed.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textSize (24);
  noStroke();
  textFont("Futura");
  textAlign(CENTER);
  fill(0);
}


function draw() {
  background(255);
  //textLeading(sin(frameCount*0.01)*50);
  textLeading(mouseY/5);
  text(myText, int(windowWidth/8), windowHeight/8, int(windowWidth/4*3), windowHeight);
  
}
