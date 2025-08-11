function setup() {
  createCanvas(windowWidth, windowHeight);
  background(228,194,59);
  colorMode (HSB);
}

function draw() {
  d = random(55,70);
  fill(20,random(40,60),20);
  ellipse(mouseX,mouseY,d,d);

}

  function keyPressed() {
  if (key === 'p') {save('dibujo.jpg');
  
}
