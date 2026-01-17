var 
border, grid1, grid2, gridSpace,
playerX, playerY, playerWidth, speedPlayer,
botX, botY, botWith,
speed, timer;

border = 10;
speedPlayer = 8;
playerWidth = 150;
botWidth = 70;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  playerX = width/2;
  playerY = height/2;
  
  botX = random(border+botWidth,width-border-botWidth);
  botY = random(border+botWidth,width-border-botWidth);
  
  t = 0;

}

function draw() {
  
  Background();
  
  Bot();
  
  Player();
  
  //Opacity();
  
}

function Background() {
  background(0);
  
  camera(0,0,0);
  
  stroke(255, 100, 100);
  strokeWeight(1);
  
  grid1 = 0;
	grid2 = width;
	gridSpace = 20;
	
	for (var i = 0; i < width; i+=gridSpace) {
    line(i, grid1, i, grid2);
    line(grid1, i, grid2, i);
  }
  
  stroke(sin(frameCount * 0.1) * 255,0,0);
  strokeWeight(10);
  noFill();
  rect(0,0,width,height);
  
}

function Player() {
  stroke(0,150,0);
  strokeWeight(5);
  fill(80,255,80);
  ellipse(playerX,playerY,playerWidth);
  
  if (playerX >= width-(playerWidth/2+border)){
    playerX = width-(playerWidth/2+border);
  }
  if (playerX <= (playerWidth/2+border)){
    playerX = (playerWidth/2+border);
  }
  if (playerY >= height-(playerWidth/2+border)){
    playerY = height-(playerWidth/2+border);
  }
  if (playerY <= (playerWidth/2+border)){
    playerY = (playerWidth/2+border);
  }
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(81))
    playerX-=speedPlayer;

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
    playerX+=speedPlayer;

  if (keyIsDown(UP_ARROW) || keyIsDown(90))
    playerY-=speedPlayer;

  if (keyIsDown(DOWN_ARROW) || keyIsDown(83))
    playerY+=speedPlayer;
}

function Bot() {
  stroke(0,0,150);
  strokeWeight(3);
  fill(80,80,255);

  var botX = width * noise(t);
  var botY = height * noise(t+5);
  ellipse(botX,botY,botWidth);
  t = t + 0.01;
  
  if (botX >= width-(botWidth/2+border)){
    botX = width-(botWidth/2+border);
  }
  if (botX <= (botWidth/2+border)){
    botX = (botWidth/2+border);
  }
  if (botY >= height-(botWidth/2+border)){
    botY = height-(botWidth/2+border);
  }
  if (botY <= (botWidth/2+border)){
    botY = (botWidth/2+border);
  }
}

function Opacity() {
	noStroke();
	fill(0,0,0,sin(frameCount * 0.01) * 300)
	rect(0,0,width,height)	
}
