//Code from TAYLA ROGIC
function setup() {
createCanvas (550,550);
background (0,0,0);
}

function draw() {
  fill ((mouseX+mouseY)/1,255-mouseX/2,255-mouseY/2);
  rect (275,220,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (220,165,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (165,330,50,50);
  fill ((mouseX+mouseY)/5,255-mouseX/6,255-mouseY/2);
  rect (275,165,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (165,165,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (220,330,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (275,330,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (330,165,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (330,330,50,50);
  fill ((mouseX+mouseY)/2,255-mouseX/1,255-mouseY/2);
  rect (220,275,50,50);
}
