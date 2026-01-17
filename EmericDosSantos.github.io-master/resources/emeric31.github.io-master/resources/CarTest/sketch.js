var concreteImg;
//var grid1, grid2, gridSpace;
var car01, car02, car01Img, car02Img;
var walls, wallImg;
var wheel01, wheel02, wheelImg;

function preload() {
	concreteImg = loadImage('concrete.png');
	car01Img = loadImage('car01.png');
	car02Img = loadImage('car02.png');
	wheelImg = loadImage('wheel-01.png');
}

function setup() {
  createCanvas(2000, 2000);
  
  player01Car();
  
  player02Car();
  
  wall();
}

function draw() {
	background(80,220,80);
  background(concreteImg);
  
  border();
  
  //grid();
  
  controlPlayer01();
  controlPlayer02();
  
  car01.collide(car02);
  car01.collide(walls);
  
  car02.collide(car01);
  car02.collide(walls);
  
  drawSprites();

  cam();
}

function player01Car() {
	car01 = createSprite(width/2,height/2);
  car01.addImage(car01Img);
  car01.maxSpeed = 10;
  car01.friction = .98;
}

function player02Car() {
	car02 = createSprite(width/2,height/3);
  car02.addImage(car02Img);
  car02.maxSpeed = 10;
  car02.friction = .98;
}

function wheels01() {
	wheel01 = createSprite(car01.position.x,car01.position.y);
  wheel01.addImage(wheelImg);
  wheel01.depth = -1;
}

function wheels02() {
	wheel02 = createSprite(car02.position.x,car02.position.y);
  wheel02.addImage(wheelImg);
  wheel02.depth = -1;
}

function wall() {
	walls = new Group();
	
	for (var i = 0; i < 5; i++) {
    var w = createSprite(
      random(125, width-125), 130+(height/5)*i,
      random(10, 300), random(10, 300));
    walls.add(w);
    w.shapeColor = color(0);
  }
}

function border() {
  stroke(sin(frameCount * 0.1) * 255,0,0);
  strokeWeight(10);
  noFill();
  rect(0,0,width,height);
  
  if(car01.position.x < 68)
    car01.position.x = 68
  if(car01.position.y < 68)
    car01.position.y = 68;
  if(car01.position.x > width-68)
    car01.position.x = width-68;
  if(car01.position.y > height-68)
    car01.position.y = height-68;
    
  if(car02.position.x < 68)
    car02.position.x = 68
  if(car02.position.y < 68)
    car02.position.y = 68;
  if(car02.position.x > width-68)
    car02.position.x = width-68;
  if(car02.position.y > height-68)
    car02.position.y = height-68;
}

/*function grid() {
	grid1 = 0;
	grid2 = width-6;
	gridSpace = 100;
	
	stroke(100);
	strokeWeight(1);
	
	for (var i = 0; i < width; i+=gridSpace) {
    line(i, grid1, i, grid2);
    line(grid1, i, grid2, i);
  }
}*/

function controlPlayer01() {
	if(keyIsDown(81)) {
    car01.rotation -= 2;
    wheels01();
		wheel01.rotation = car01.rotation;
	}
  if(keyIsDown(68)) {
    car01.rotation += 2;
    wheels01();
		wheel01.rotation = car01.rotation;
  }
  if(keyIsDown(90)) {
    car01.addSpeed(.2, car01.rotation);
  }
  if(keyIsDown(83)) {
  	car01.addSpeed(-0.1, car01.rotation);
  }
}

function controlPlayer02() {
	if(keyDown(LEFT_ARROW)) {
    car02.rotation -= 2;
    wheels02();
		wheel02.rotation = car02.rotation;
	}
  if(keyDown(RIGHT_ARROW)) {
    car02.rotation += 2;
    wheels02();
		wheel02.rotation = car02.rotation;
  }
  if(keyDown(UP_ARROW)) {
    car02.addSpeed(.2, car02.rotation);
  }
  if(keyDown(DOWN_ARROW)) {
  	car02.addSpeed(-0.1, car02.rotation);
  }
}

function cam() {
	if(mouseIsPressed){
    //camera.zoom = .5;
    //wheel.visible=false;
	}
	
  else
    camera.zoom = 1;
  
  camera.position.x = car01.position.x+width/6;
  camera.position.y = car01.position.y+height/3;
}