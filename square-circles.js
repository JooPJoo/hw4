function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 5) {
    rect(x[i] - (x.length - i)/2, y[i] - (x.length -i)/2, ((x.length)- i), ((y.length) - i));
  }

  x = x.slice(-100); // remove all but the last 50 x values
  y = y.slice(-100); // remove all but the last 50 y values
}
