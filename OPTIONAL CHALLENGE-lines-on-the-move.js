var offset = 0;

function setup() 
  {
    createCanvas(400, 400);
    colorMode(HSB);
  }

function draw() 
  {
    background(255);
    frameRate(1) //this gives it the marching look as oppossed to the smooth movement

  for (var x = 50; x < 400; x = x + 10) 
    {
      line(x + offset, height/2, (x + offset)+100, height/2-75) + 1;
    
      offset = offset + .5
    
    }
  
  }
