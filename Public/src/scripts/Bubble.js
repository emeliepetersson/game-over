class Bubble {
  // Acceleration

  constructor(x, y, diameter, velocityX, velocityY, color) {
    this.x = x;
    this.y =
      y >= height - (70 + diameter / 2) ? height - (85 + diameter / 2) : y;
    this.diameter = diameter;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.ay = 5;
    this.vMultiplier = 0.1;
  }

  drawBubble() {
    push();
    fill(this.color);
    stroke(0);
    strokeWeight(4);
    circle(this.x, this.y, this.diameter);
    pop();
  }

  bubbleBounce() {
    this.velocityX = this.velocityX;
    this.velocityY = this.velocityY + this.ay;
    this.y = this.y + this.velocityY * this.vMultiplier;
    this.x = this.x + this.velocityX;

    if (this.x < this.diameter / 2) {
      this.velocityX = -this.velocityX;
    }
    if (this.x > windowWidth - this.diameter / 2) {
      this.velocityX = -this.velocityX;
    }
    if (this.y > height - this.diameter / 2) {
      this.y = height - this.diameter / 2;
      this.velocityY = -this.velocityY;
    }
  }
}
