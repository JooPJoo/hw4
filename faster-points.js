var pixel = [100]

function setup() 
  {
    createCanvas(400, 400);
    colorMode(HSB, width, height, 100);
  }

function draw() 
  {
    var x = random(width);
    var y = random(height);

  /*for (var i = 0; i < pixel.length; i++)
  {
    stroke(x[i], y[i], 100);
    point(x[i], y[i]);
  }*/
  
    for (x = 0; x < 400; x++)
      {
  
        stroke(x, y, 100);
        point(x, y);
        //pixel = pixel * 100;
      }
  }
