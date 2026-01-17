/*
Jessica Lima 3150065
Emeric Dos Santos 3150677
Ruben Santos 3150076
Ano letivo 2015/2016 semestre 2
Algoritmia e programação - ESAD.CR
Marco Heleno
Andre Rocha
*/

//Variaveis
float period = 1000/2;
int mode, x, y, direcao1, x2, y2, direcao2, tamanho, score1, score2;
PFont tronFont, arialFont;
PImage tronImg;
boolean start, score;

void setup(){
  fullScreen();//Para ficar a ocupar o ecã todo
  frameRate(30);//Frames por segundo
  colorMode(HSB, 360, 100, 100);//Modo de cores
  background(0);//Cor do ecrã a imagem não fizer o load
  tronImg = loadImage("TronBack.jpg");//Fazer o loa da imagem
  start = true;//Boolean
  mode = 1;//Boolean
  score = false;//Boolean
  score1 = 0;//Boolean
  score2 = 0;//Boolean
  x = width/2-40;//posição x do player 1
  y = height/2;//posição y do player 1
  x2 = width/2+40;//posição x do player 2
  y2 = height/2;//posição y do player 2
  tamanho = height/72;//tamanho dos players
  direcao1 = LEFT;//direção no começo do player 1
  direcao2 = RIGHT;//direção no começo do player 2
}

void draw(){
  if (mode == 1){ //se mode for 1 entra no menu
    intro();
  }
  if (mode == 2){//se mode for 2 entra no jogo
    game();
  }
  if (mode == 3){//para definir quem ganhou o jogo
    win2();
  }
  if (mode == 4){
    win1();
  }
  if (mode == 5){//para recomençar
    replay();
  }
}

void clearScreen(){//Para o fundo ficar estatico durante o jogo
  image(tronImg, 0, 0, width, height);//Imagem de fundo
}

void intro (){//Menu inicial
  clearScreen();
  tronFont = createFont("Tr2n.ttf", 200);//Fontes
  arialFont = createFont("Arial", 30);

  textAlign(CENTER, CENTER);//alinhar texto no centro
  
  textFont(tronFont);
  fill(200, 100, 100);//preencher a cor
  text("Tron", width/2, height/2);

  textFont(arialFont);
  fill(360);
  long t = millis();//Animação do texto
  if (getStateAtTimeWithPeriod(t, period))
  text("Press any key", width/2, height/4*3);
  
  if (keyPressed == true || mousePressed == true){//Se tecla ou rato presionado começa o jogo
    mode = 2;
  }
}

void grid(){//Fundo do jogo
  background(180, 100, 40);
  for (int x = 0; x<=width; x+=40){
  for (int y = 0; y<=height; y+=40){
  strokeCap(PROJECT);//para tornar os pontos quadrado
  strokeWeight(38);// tamanho do ponto
  stroke(0, 0, 0);//cor
  point(x, y);
  }
  noFill();
  stroke(360, 100, 80);
  rect(0, 0, width, height);//Para fazer um quadrado que ocupa o ecrã todo
 }
}

void game(){
  if (start == true){//chamada do fundo
      grid();
      start = false;
    }
  player1();//chamada dos players
  player2();  
}

void player1(){ //player1
  loadPixels();//Fazer o load dos pixeis
  // Se o player em cima das cores definidas comença o modo 3
  if (pixels[y*width+x] == color(40,100,100) || pixels[y*width+x] == color(200,100,100) || pixels[y*width+x] == color(360, 100, 80)) mode = 3;
  else score = true;//Para definir o score
  
  strokeWeight(30);//Tamanho do impacto
  stroke(200, 100, 100, 99);//cor efeito fade no stroke
  fill(200, 100, 100);// cor ellipse
  if(mode == 3) ellipse(x, y, 30, 30); //ellipse impacto
  
  strokeCap(PROJECT);
  stroke(200, 100, 100);
  strokeWeight(tamanho);
  point(x,y);
  
  //direcções
  if (direcao1 == LEFT) x=x-tamanho;//Quando a direção for esquerda
  else if (direcao1 == DOWN) y=y+tamanho;//
  else if (direcao1 == RIGHT) x=x+tamanho;
  else if (direcao1 == UP) y=y-tamanho;
}

void player2(){//player2
  loadPixels();
  if(pixels[y2*width+x2] == color(200, 100, 100) || pixels[y2*width+x2] == color(40, 100, 100) || pixels[y2*width+x2] == color(360, 100, 80)) mode = 4;
  else score = true;
  
  strokeWeight(30);
  stroke(40, 100, 100, 99);
  fill(40, 100, 100);
  if(mode == 4) ellipse(x2, y2, 30, 30); 
  
  strokeCap(PROJECT);
  stroke(40, 100, 100);
  strokeWeight(tamanho);
  point(x2,y2);
  
  if(direcao2 == LEFT) x2=x2-tamanho;
  else if(direcao2 == DOWN) y2=y2+tamanho;
  else if(direcao2 == RIGHT) x2=x2+tamanho;
  else if(direcao2 == UP) y2=y2-tamanho;  
}

void win(){//ecrã gameover
  arialFont = createFont("Arial", 30);
  textFont(arialFont);
  fill(360);
  text("SCORE:", width/2, height/4*1-100);
  text(score1, width/2-30, height/4*1-50);
  text(":", width/2, height/4*1-50);
  text(score2, width/2+30, height/4*1-50);
  text("REPLAY ?", width/2, height/5*3.5);
  long t = millis();
  if (getStateAtTimeWithPeriod(t, period))
  text("press Enter", width/2, height/5*4);
  
  if (keyCode == ENTER){
    mode = 5;//para fazer o replay
  }
}

void win1(){//ecrã do winner 1
  if (score == true){//para aumentar o score 
    score1++;
    score = false;
  }
  noStroke();
  fill(0, 3);
  rect(0, 0, width, height);
  
  textAlign(CENTER, CENTER);
  arialFont = createFont("Arial", 80);
  textFont(arialFont);
  fill(200, 100, 100);
  text("Player 1 Win", width/4, height/2);
  win();
}

void win2(){//ecrã do winner 2
  if (score == true){
    score2++;
    score = false;
  }
  noStroke();
  fill(0, 3);
  rect(0, 0, width, height);
  
  textAlign(CENTER, CENTER);
  arialFont = createFont("Arial", 80);
  textFont(arialFont);
  fill(40, 100, 100);
  text("Player 2 Win", width/4*3, height/2);
  win();
}

void replay(){//recomençar o jogo
  x = width/2-40;
  y = height/2;
  x2 = width/2+40;
  y2 = height/2;
  direcao1 = LEFT;
  direcao2 = RIGHT;
  start = true;
  mode = 2;
}

void keyPressed(){//teclas de direções  
  if (direcao1 == RIGHT){
  if (key == 's' || key == 'S') direcao1 = DOWN;
  else if (key == 'w' || key == 'W') direcao1 = UP;
  } 
  if (direcao1 == LEFT){  
  if (key == 's' || key == 'S') direcao1 = DOWN;
  else if (key == 'w' || key == 'W') direcao1 = UP;  
  }  
  if (direcao1 == UP){ 
  if (key == 'a' || key == 'A') direcao1 = LEFT;
  else if (key == 'd' || key == 'D') direcao1 = RIGHT;  
  }  
  if (direcao1 == DOWN){  
  if (key == 'a' || key == 'A') direcao1 = LEFT;
  else if (key == 'd' || key == 'D') direcao1 = RIGHT; 
  }
  
  if (direcao2 == RIGHT){
  if (keyCode == DOWN) direcao2 = DOWN;
  else if (keyCode == UP) direcao2 = UP;
  }  
  if (direcao2 == LEFT){  
  if (keyCode == DOWN) direcao2 = DOWN;
  else if (keyCode == UP) direcao2 = UP;  
  }  
  if (direcao2 == UP){ 
  if (keyCode == LEFT) direcao2 = LEFT;
  else if (keyCode == RIGHT) direcao2 = RIGHT;  
  }  
  if (direcao2 == DOWN){  
  if (keyCode == LEFT) direcao2 = LEFT;
  else if (keyCode == RIGHT) direcao2 = RIGHT; 
  }
}

boolean getStateAtTimeWithPeriod(long t, float period){//Para fazer piscar o texto
  boolean onOrOff = (((int)(t / period)) % 2==1);
  return onOrOff;
}