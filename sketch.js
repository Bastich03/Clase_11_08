function setup() {
  createCanvas(windowWidth, windowHeight);
  background(228,194,59);
}

function draw() {
  d = random(55,70);
  fill(255,random(55,200),70);
  ellipse(mouseX,mouseY,d,d);

  function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
