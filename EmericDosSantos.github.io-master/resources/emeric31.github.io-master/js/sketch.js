var canvas, a, b;

function setup() {
  canvas = createCanvas(windowWidth, 120);
  canvas.parent('headerP5');
  frameRate(6);
  a = -2;
  b = -1;
}

function draw() {
  a++;
  b++;
  background(20);
  
  stroke(60);
  strokeWeight(windowWidth/70);
  line(-width/24, height, 0, 0);
  line(0, height, width/24*1, 0);
  line(width/24*1, height, width/24*2, 0);
  line(width/24*2, height, width/24*3, 0);
  line(width/24*3, height, width/24*4, 0);
  line(width/24*4, height, width/24*5, 0);
  line(width/24*5, height, width/24*6, 0);
  line(width/24*6, height, width/24*7, 0);
  line(width/24*7, height, width/24*8, 0);
  line(width/24*8, height, width/24*9, 0);
  line(width/24*9, height, width/24*10, 0);
  line(width/24*10, height, width/24*11, 0);
  line(width/24*11, height, width/24*12, 0);
  line(width/24*12, height, width/24*13, 0);
  line(width/24*13, height, width/24*14, 0);
  line(width/24*14, height, width/24*15, 0);
  line(width/24*15, height, width/24*16, 0);
  line(width/24*16, height, width/24*17, 0);
  line(width/24*17, height, width/24*18, 0);
  line(width/24*18, height, width/24*19, 0);
  line(width/24*19, height, width/24*20, 0);
  line(width/24*20, height, width/24*21, 0);
  line(width/24*21, height, width/24*22, 0);
  line(width/24*22, height, width/24*23, 0);
  line(width/24*23, height, width/24*24, 0);
  line(width/24*24, height, width/24*25, 0);
  
  stroke(255, 160, 0);
  strokeWeight(windowWidth/50);
  line(width/24*a, height, width/24*b, 0);
  
  if(a == 24){
    a = -2;
    b = -1;
  }
}

function windowResized(){
  window.location.reload(true);
}