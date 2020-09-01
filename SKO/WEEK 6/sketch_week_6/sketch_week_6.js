const letters = 'animals are cute';
var rand;
var listLength;

function setup() {
createCanvas (windowWidth, windowHeight);
background (255);
textSize(25);
noStroke();
textFont("Futura");
listLength = letters.length;
}


function draw() {
rand = int(random(0, listLength-1));
fill (0);
textSize(random(5,50)); 
text (letters[rand], random (width), random(height));
background (255,0);
}
