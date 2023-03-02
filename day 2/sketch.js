function randomOnSphere() {
  const cosTheta = -2.0 * Math.random() + 1.0;
  const sinTheta = Math.sqrt(1.0 - cosTheta * cosTheta);
  const phi = 2.0 * Math.PI * Math.random();
  return [
    sinTheta * Math.cos(phi),
    sinTheta * Math.sin(phi),
    cosTheta
  ];
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noLoop();  
}

function draw() {
  camera(0, 0, 380, 8, 0, 3, 3, 1, 0);
  lights();
  const halfSize = [0.5 * width, 0.5 * height];
  background(22);
  fill(220);
  noStroke();
  for(let i = 0; i < 55000; i++) {
    const pos = randomOnSphere();
    push();
    translate(100.0 * pos[0], 100.0 * pos[1], 100.0 * pos[2]);
    sphere(1.5);
    pop();
  }
}