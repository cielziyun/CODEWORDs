let words = ["We are the hackers of abstractions", "We produce NEW CONCEPTS" , "NEW PRODUCTIONS", "NEW SENSATIONS", "Hackers create the possibility of new things entering the world", "Not always great things", "Or even good things", "But NEW things", "The sectoral world is dynamic", "All classes enter into relations of CONFLICT", "COLLUSION", "and COMPROMISE", "The class struggle drives history into abstraction", "and abstraction into history"];
let index = 0; 

let wiggle = 'new';

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background (255);
  textSize (32);
  noStroke();
  textFont("Futura");
  fill(0);
 
  }

function draw() {
  background(220);
  text(words[index],100,windowHeight/2);
  
    for( let j = 1; j < 30; j++){
    for( let i = 0; i < wiggle.length; i++){
      let x = cos(i/10 + frameCount / 40) * 40;
      let y = sin(i/10 + frameCount / 40) * 40;
      
      textSize(i * 17);
     text(wiggle[i], windowWidth/2 + x * j, windowHeight/2 + y * j); 
    }
  }

}

function mousePressed(){
  index++;
  if(index > words.length-1){
   index = 0; 
  }
 

  
}
