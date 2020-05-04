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
    this.velocityX = this.velocityX;
    this.velocityY = this.velocityY + this.ay;
    this.y = this.y + this.velocityY * this.vMultiplier;
    this.x = this.x + this.velocityX;
  
    // Bounce when touch the edge of the canvas
    if (this.x < this.diameter/2) {
      // this.x = this.diameter/2;
      this.velocityX = -this.velocityX;
    }
    if (this.x > windowWidth - this.diameter/2) {
      // this.x = windowWidth - this.diameter/2;
      this.velocityX = -this.velocityX;
    }
    if (this.y > windowHeight - this.diameter/2) {
      this.y = windowHeight - this.diameter/2;
      this.velocityY = -this.velocityY;
    }
    if (this.y <= windowHeight/3 - this.diameter/2 - 10){
      this.y = windowHeight/3;
    }
  }


}

/**
 * VARIABLES
 */
let playerDirection = 0;
let movePlayer = 0;
let img;
const bubbles = [];

function preload() {
  
    img = createImage(50, 50);
    img.loadPixels();
    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        img.set(i, j, color(0, 90, 102));
      }
    }
  img.updatePixels()
}

/**
 * GAME
 */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  bubbles.push(new Bubble(windowWidth/2, windowHeight/3, 50, 5, 5));
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
      bubble.x + bubble.diameter / 2 < playerDirection + 50 &&
      bubble.x + bubble.diameter / 2 > playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  image(img, playerDirection, window.innerHeight - 50, 50, 50);
}


// Read key press and change players direction
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "ArrowRight") {
    playerDirection += 10;
  } else if (key === "ArrowLeft") {
    playerDirection -= 10;
  }
});