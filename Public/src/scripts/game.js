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

    // Check for collisions
    if (
      bubble.y + bubble.diameter / 2 >= height - 60 &&
      bubble.x + bubble.diameter / 2 < playerDirection + 50 &&
      bubble.x + bubble.diameter / 2 > playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  //Draw arrow
  // new Arrow(
  //   createVector(playerDirection + 25, height),
  //   createVector(height, 400)
  // ).shootArrow();

  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i];

    arrow.shootArrow();

    console.log("vec y :" + Math.abs(arrow.vec.y));
    console.log("Canvas: " + height);

    if (arrow.vec.y < -height) {
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

// Read key presses to change players direction and shoot arrows
function keyPressed() {
  if (keyCode === 32) {
    //let base = createVector(playerDirection + 25, windowHeight);
    // let vec = createVector(0, 0);
    // arrows.push(new Arrow(base, vec));
    let base = createVector(playerDirection + 25, height);
    let vec = createVector(height, height);
    arrows.push(new Arrow(base, vec));
  }
}
