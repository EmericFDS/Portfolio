float stroke, topX, topY, bottomX, bottomY, raioX, raioY, headX, headY, legX, legY, feetX, feetY, handX, handY, olho1, olho2;
color corBola;

void setup(){
  
  fullScreen();
  colorMode(HSB, 360,100,100);
  frameRate(11);
  
}

void draw(){
  
  /*Fundo Animado*/
  
  background(random(0,360),100,random(0,100));
  for (int x = 0; x<=width; x+=width/10)
  {
  for (int y = 0; y<=height; y+=width/10)
  {
  strokeCap(PROJECT);
  strokeWeight(width/11);
  stroke(random(0,360),random(50,100),100);
  point(x, y);
  
  }
 }
  /*Cabeça*/
  
  topX=random(width/2-100, width/2+100);
  topY=random(height-600, height-500);
  bottomX=random(width/2-100, width/2+100);
  bottomY=random(height-400, height-300);
  
  raioX=100;
  raioY=100;
  
  headX=topX;
  headY=topY;
  
  legX=bottomX;
  legY=bottomY;
  
  corBola = color(random(360), 100, 100);
  
  /*Olhos*/
  
  strokeWeight(3);
  stroke(0);
  fill(0, 0, 0, 150);
  rect(0, height/3*2, width, height/3*2, 0);
  
  /*Corpo, Pernas, Braços*/
  
  noStroke();
  fill(0);
  ellipse(feetX, width/2, 300, 20);
  
  fill(corBola);
  strokeCap(ROUND);
  stroke(corBola);
  strokeWeight(50);
  
  feetX=random(legX-100, legX+100);
  feetY=random(legY+100, legY+150);
  
  line(bottomX, bottomY, feetX, feetY);
  
  feetX=random(legX-100, legX+100);
  feetY=random(legY+100, legY+150);
  
  line(bottomX, bottomY, feetX, feetY);

  handX=random(headX-150, headX+150);
  handY=random(headY-20, headY+150);
  
  line(headX, headY+100, handX, handY);
  
  handX=random(headX-150, headX+150);
  handY=random(headY-20, headY+150);
  
  line(headX, headY+100, handX, handY);
  
  line(headX, headY+50, bottomX, bottomY);
  ellipse(topX, topY, raioX, raioY);
  
  noStroke();
  fill(random(360), 100, 100);
  ellipse(topX+30, topY, 50, 50);
  ellipse(topX-30, topY, 50, 50);
  
  fill(random(360), 100, 100);
  ellipse(topX-30, topY, raioX/4, raioY/4);
  ellipse(topX+30, topY, raioX/4, raioY/4);
}