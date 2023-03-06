function setup() {
	createCanvas(400, 400);
  circle(150, 100, 150);
}

function draw() {
	background(208, 188, 188);
  circle1();
  tri1();
  tri2();
  tri3();
}

function circle1(){
  fill(241,164,34);
  circle(150, 100, 150);
}

function tri1(){
  fill(61, 58, 53);
  beginShape();
  vertex(0, 400);
  vertex(0, 200);
  vertex( 300, 55);
  vertex(300, 55);
  vertex(400, 150);
  vertex(400, 400);
  endShape(CLOSE);
}

function tri2(){
  fill(155, 173, 185);
  beginShape();
  vertex(0, 260);
  vertex(150, 128);
  vertex(150, 128);
  vertex(400, 270);
  vertex(400, 400);
  vertex(0, 400);
  
  endShape();
}

function tri3(){
  noStroke();
  fill(253, 217, 67);
  beginShape();
  vertex(0, 333);
  vertex(222, 200);
  vertex(222, 200);
  vertex(400, 333);
  vertex(400, 400);
  vertex(0, 400);
  endShape();
}
