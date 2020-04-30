/**
 * MAKE BUBBLE
 */
class Bubble {
// Acceleration
ax = 1;
ay = 15;

vMultiplier = 0.01;
bMultiplier = 1;

  constructor(x, y, diameter, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  drawBubble() {
    circle(this.x, this.y, this.diameter);
  }

  updateBubble() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.y + this.diameter / 2 >= window.innerHeight) {
      this.velocityY = -this.velocityY;
    }

    if (this.y <= this.diameter / 2) {
      this.velocityY = Math.abs(this.velocityY);
    }

    if (this.x + this.diameter / 2 >= window.innerWidth) {
      this.velocityX = -this.velocityX;
    }

    if (this.x <= this.diameter / 2) {
      this.velocityX = Math.abs(this.velocityX);
    }
  }


bubbleBounce() {
    this.velocityX = this.velocityX + this.ay;
    this.velocityY = this.velocityY + this.ax;
    this.y = this.y + this.velocityY * this.vMultiplier;
    this.x = this.x + this.velocityX * this.vMultiplier;
  
    // Bounce when the bubble touches the edge of the canvas
    if (this.x <= this.diameter/2) {
      // this.x = this.diameter/2;
      this.ax = -this.ax
      this.velocityX = -this.velocityX;
    }
    if (this.velocityY <= 0) {
      this.ay = -this.ay
    }
    if (this.x >= windowWidth - this.diameter/2) {
      // this.x = windowWidth - this.diameter/2;
      this.ax = -this.ax
      this.velocityX = -this.velocityX;
    }
    if (this.y >= windowHeight - this.diameter/2) {
      // this.y = windowHeight - this.diameter/2;
      this.velocityY = -this.velocityY * this.bMultiplier;
    }
  }


}

/**
 * VARIABLES
 */
let playerDirection = 0;
let img;
const bubbles = [];

function preload() {
  // img = loadImage("hamster.png");
}

/**
 * GAME
 */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const bubble = new Bubble(50, 50, 50, 10, 10);
  bubbles.push(bubble);
}

function draw() {
  background("#FBB6A5");

  // draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    // bubble.updateBubble();
    bubble.bubbleBounce();

    // Check for kollisions
    if (
      bubble.y + bubble.diameter / 2 >= window.innerHeight - 60 &&
      bubble.x + bubble.diameter / 2 < playerDirection + 60 &&
      bubble.x + bubble.diameter / 2 > playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  // Read key press and change players direction
  document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "ArrowRight") {
      playerDirection += 0.05;
    } else if (key === "ArrowLeft") {
      playerDirection -= 0.05;
    }
  });

  // const player = image(img, playerDirection, window.innerHeight - 50, 50, 50);
}
