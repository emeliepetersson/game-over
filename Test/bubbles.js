/**
 * MAKE BUBBLE
 */
class Bubble {
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
}

/**
 * VARIABLES
 */
let playerDirection = 0;
let img;
const bubbles = [];

function preload() {
  img = loadImage("hamster.png");
}

/**
 * GAME
 */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const bubble = new Bubble(50, 50, 50, 5, 5);
  bubbles.push(bubble);
}

function draw() {
  background("#FBB6A5");

  // draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    bubble.updateBubble();

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

  const player = image(img, playerDirection, window.innerHeight - 50, 50, 50);
}
