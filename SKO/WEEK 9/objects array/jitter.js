let words = ["We are the hackers of abstractions", "We produce NEW CONCEPTS" , "NEW PRODUCTIONS", "NEW SENSATIONS", "Hackers create the possibility of new things entering the world", "Not always great things", "Or even good things", "But NEW things", "The sectoral world is dynamic", "All classes enter into relations of CONFLICT", "COLLUSION", "and COMPROMISE", "The class struggle drives history into abstraction", "and abstraction into history"];
let index = 0; 
let bugs = [];
let wiggle = 'new';

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background (255);
  textSize (32);
  noStroke();
  textFont("Futura");
  fill(0);
  for (let o = 0; o < 35; o++) {
    bugs.push(new Jitter());
    }
  }

function draw() {
  background(220);
  text(words[index],100,windowHeight/2);
  for (let o = 0; o < bugs.length; o++) {
    bugs[o].move();
    bugs[o].display();
  }
    for( let j = 1; j < 30; j++){
    for( let i = 0; i < wiggle.length; i++){
      let x = cos(i/10 + frameCount / 40) * 40;
      let y = sin(i/10 + frameCount / 40) * 40;
      
      textSize(i * 17);
     text(wiggle[i], 200 + x * j, 200 + y * j); 
    }
  }

}

function mousePressed(){
  index++;
  if(index > words.length-1){
   index = 0; 
  }
}  
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    
  }

  
}
