function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  bubbles.push(new Bubble(width / 2, height / 3, 50, 5, 5));
}

function draw() {
  background(255);

  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    bubble.bubbleBounce();

    // Check for collisions between bubble and player
    if (
      bubble.y + bubble.diameter / 2 >= height - 50 &&
      bubble.x - bubble.diameter / 2 <= playerDirection + 50 &&
      bubble.x + bubble.diameter / 2 >= playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  //Draw arrow
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i];

    arrow.shootArrow();

    if (arrow.vec.y <= 0) {
      arrows.pop(arrow);
    }

    //Check for collision between arrow and bubbles
    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      if (
        arrow.base.x <= bubble.x + bubble.diameter / 2 &&
        arrow.base.x >= bubble.x - bubble.diameter / 2 &&
        Math.abs(arrow.vec.y) <= bubble.y + bubble.diameter / 2
      ) {
        arrows.pop(arrow);
        bubbles.pop(bubble);
      }
    }
  }

  //Draw Player
  image(img, playerDirection, height - 50, 50, 50);

  // Read key presses to change player's direction
  if (keyIsDown(LEFT_ARROW)) {
    if (playerDirection - 10 < 0) {
      return;
    }
    playerDirection -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (playerDirection + 60 > windowWidth) {
      return;
    }
    playerDirection += 10;
  }
}

// Read key presses to shoot arrows
function keyPressed() {
  if (keyCode === 32) {
    console.log(arrows.length);
    if (arrows.length > 0) {
      return;
    }
    let base = createVector(playerDirection + 25, height);
    let vec = createVector(height, height);
    arrows.push(new Arrow(base, vec));
  }
}
