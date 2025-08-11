function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  background(228,194,59)
  colorMode (HSB);
}

function draw() {
  d = random(45,70);
  fill(random(20,10,0),random(0,100),100);
  ellipse(mouseX,mouseY,d,d);
  fill(random(0,70,95),random(20,80,60),100);
  square(mouseX,mouseY, 35);
}
  function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');}
}