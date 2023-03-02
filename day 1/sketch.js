//30 Days of creatve coding challenge by James Msipa
//this is my first piece of the collection 

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(30)
  
  rotateY(30)

  noFill()
  stroke(100)

  for (var i = 0; i < 20; i++) {

    var r = map(sin(frameCount / 2 ), -1, 1, 100, 200)
    var g = map(i, 0, 50, 100, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, b, g)

    beginShape()
    for (var j = 0; j < 720; j += 10) {
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 50

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('01.gif', 4); // 1 sec
  }
}
