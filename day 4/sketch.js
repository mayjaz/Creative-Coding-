
// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(600, 600, WEBGL);
  describe('a white box rotating in 3D space');
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  stroke(207,7,99);
  strokeWeight(0.5);
}

function draw() {
  background(230, 50, 15);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(207, 7, 99);
  sphere(40);
  rotateY(frameCount * 0.01);
  box(120);
  camera(0, 0, 20 + sin(frameCount * 0.01) * 400, 0, 0, 0, 0, 1, 0);
  plane(10, 10);
}

function keyPressed() {
  if (key === 's') {
    saveGif('01.gif', 5); 
  }
}