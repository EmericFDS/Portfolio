//Emeric Dos Santos, 2016

int cx, cy;
float secondsRadius;
float minutesRadius;
float hoursRadius;
float Largura;
PFont tipoLetra;

void setup() {
  size(800, 800);
  stroke(255);
  smooth();
  colorMode(HSB, 360, 100, 100);  
  textAlign(CENTER);
  tipoLetra = createFont("Aileron-SemiBold-60", 30);
  textFont(tipoLetra);
  
  int radiusa = min(275, 275);
  int radiusb = min(250, 250);
  int radiusc = min(180, 180);
  secondsRadius = radiusa * 0.72;
  minutesRadius = radiusb * 0.60;
  hoursRadius = radiusc * 0.50;
  Largura = radiusa * 1.8;
  
  cx = width / 2;
  cy = height / 2;
}

void draw() {
  background(255, 0, 0);
  noFill();
  noStroke();
  
  float s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  float m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  float h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  float hMap = map(hour(), 0, 12, 0, 360);
  float mMap = map(minute(), 0, 60, 0, 360);
  float sMap = map(second(), 0, 60, 0, 360);
  
  pushMatrix();
  stroke(sMap, 100, 100);
  strokeWeight(20);
  ellipse(400, 400, 400, 400);
  popMatrix();
 
  pushMatrix();
  stroke(mMap, 100, 100);
  strokeWeight(30);
  ellipse(400, 400, 300, 300);
  popMatrix();
 
  pushMatrix();
  strokeWeight(40);
  stroke(hMap, 100, 100);
  ellipse(400, 400, 180, 180);
  popMatrix();
  
  stroke(0);
  strokeWeight(4);
  beginShape(POINTS);
  for (int a = 0; a < 360; a+=6) {
    float b = cx + cos(radians(a)) * secondsRadius;
    float c = cy + sin(radians(a)) * secondsRadius;
    vertex(b, c);
  }
  strokeWeight(8);
  for (int a = 0; a < 360; a+=6) {
    float d = cx + cos(radians(a)) * minutesRadius;
    float e = cy + sin(radians(a)) * minutesRadius;
    vertex(d, e);
  }
  strokeWeight(16);
  for (int a = 0; a < 360; a+=30) {
    float d = cx + cos(radians(a)) * hoursRadius;
    float e = cy + sin(radians(a)) * hoursRadius;
    vertex(d, e);
  }

  stroke(360);
  strokeWeight(2);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(8);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  
  fill(0);
  ellipse(cx, cy, 80, 80);
  pushMatrix();
  textSize(20);
  fill(hMap, 100, 100);
  text(hour(), cx, cy-13);
  fill(mMap, 100, 100);
  text(minute(), cx, cy+8);
  fill(sMap, 100, 100);
  text(second(), cx, cy+29);
  popMatrix();
  fill(360);
  text("Emeric Dos Santos", 680, 650);
}