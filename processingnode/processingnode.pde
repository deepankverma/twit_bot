void setup() {
  size(640,480);

  for(int i = 0; i < 500; i++) {
    float x = random(width);
    float y = random(height);
    float r = random(0, 255);
    float b = random(0, 255);
    noStroke();
    fill(r, b, random(255),random (100));
    ellipse(x, y, 16, 16);
    fill(random(255), random(255), random(255), 90);
    rect(random(640), random(480), random(50), random(50));
  }
  save ("output.png");
  exit();
}


