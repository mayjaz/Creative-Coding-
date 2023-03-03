let arm = [];
let popu = 1;

function setup() {
  createCanvas(800, 600);

  for(let i = 0; i < popu; i++) {
    arm.push(new waveMaker());
  }
}

function draw() {
  background(0,10);
  for(let i = 0; i < popu; i++) {
    arm[i].update(i);
  }
}

function waveMaker(){
  this.size = 10;
  this.yoff = 0;
  this.roff = 0;

  this.update = function(_i){
    this.roff += 0.15;
    let xoff = 0;
    let yoff = this.yoff;
    push();
      translate(width/2,height/2);
      rotate(this.roff+_i);
      strokeWeight();
      stroke(255, 255);
      fill(120);
      beginShape();
      for (let x = 0; x < height/2; x+= this.size) {
        let y = map(noise(xoff,yoff),0,1, -this.size*12,this.size*12);
        vertex(x,y);
        vertex(x+this.size,y);
        xoff += 0.05;
      }
      this.yoff += 0.01;
      endShape(CLOSE);
    pop();
  }
}
