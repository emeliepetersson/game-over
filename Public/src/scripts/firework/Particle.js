class Particle {
  constructor(x, y, xSpeed, ySpeed, color, size) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color;
    this.size = size;
    this.isAlive = true;
  }

  step() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.ySpeed += gravity;

    if (this.y > height) {
      this.isAlive = false;
    }
  }

  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
