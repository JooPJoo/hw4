function setup() 
  {
    createCanvas(400, 400);
  }

function draw() 
  {
    background(255);
    colorMode(HSB);
  
    stroke(random(255), (255), (255));
    //frameRate(1);

    for (var x = 50; x < width-50; x = x + 10) 
      {
        line(x, height/2, mouseX, mouseY);
    
        stroke(random(255), (255), (255));
      }
  
  
  }
