function preload(){
  font = loadFont('data/AdobeSongStd-Light.otf');
  }
var spin=0; circleX=0; rectY=0;
function setup() {
createCanvas(600,600);
background(250,250,100);
textAlign(LEFT);
}

function draw() {
 
 fill(0,200,200,30);
 noStroke();
 ellipse(circleX, 300, 20, 20);
 circleX = circleX+1; 
 
 fill(200,0,200,30);
 noStroke();
 rect(200, rectY, 30, 30);
 rectY = rectY+1; 
  
 rotate(spin);
 fill(100, 100, 0);
 textSize(16);
 textFont (font);
 textFont(font,16);
 text('hello world, my name is ciellit',300,200);
 spin=spin-10;
 


}
