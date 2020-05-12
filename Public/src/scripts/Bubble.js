/**
 * MAKE BUBBLE
 */
class Bubble {
  // Acceleration
  ay = 5;

  vMultiplier = 0.1;

  constructor(x, y, diameter, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  drawBubble() {
    const c = color(255, 0, 0);
    fill(c);
    noStroke();
    circle(this.x, this.y, this.diameter);
  }

  // updateBubble() {
  //   this.x += this.velocityX;
  //   this.y += this.velocityY;

  //   if (this.y + this.diameter / 2 >= window.innerHeight) {
  //     this.velocityY = -this.velocityY;
  //   }

  //   if (this.y <= this.diameter / 2) {
  //     this.velocityY = Math.abs(this.velocityY);
  //   }

  //   if (this.x + this.diameter / 2 >= window.innerWidth) {
  //     this.velocityX = -this.velocityX;
  //   }

  //   if (this.x <= this.diameter / 2) {
  //     this.velocityX = Math.abs(this.velocityX);
  //   }
  // }

  bubbleBounce() {
    this.velocityX = this.velocityX;
    this.velocityY = this.velocityY + this.ay;
    this.y = this.y + this.velocityY * this.vMultiplier;
    this.x = this.x + this.velocityX;

    // Bounce when touch the edge of the canvas
    if (this.x < this.diameter / 2) {
      // this.x = this.diameter/2;
      this.velocityX = -this.velocityX;
    }
    if (this.x > windowWidth - this.diameter / 2) {
      // this.x = windowWidth - this.diameter/2;
      this.velocityX = -this.velocityX;
    }
    if (this.y > windowHeight - this.diameter / 2) {
      this.y = windowHeight - this.diameter / 2;
      this.velocityY = -this.velocityY;
    }/*
    if (this.y <= windowHeight / 3 - this.diameter / 2 - 10) {
      this.y = windowHeight / 3;
    }*/
  }
}
