function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  background(228,194,59)
  colorMode (HSB);
}

function draw() {
  d = random(45,70);
  fill(random(20,10),100);
  ellipse(mouseX,mouseY,d,d);
  fill(random(20,80),100);
  square(mouseX,mouseY, 35);
}
  function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');}
}