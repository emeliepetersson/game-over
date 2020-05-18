function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  c1 = color(219, 248, 255);
  c2 = color(202, 252, 175);
}

function start() {
  timer = new Timer(120, 10);
  timer.start();
  startTime = true;
}

function draw() {
  // Background
  setGradient(0, 0, width, height, c1, c2);

  if (time == 0) {
    bubbles.pop();
    push();
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`Game Over`, windowWidth / 2, windowHeight / 2);
    pop();
  }

  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    bubble.bubbleBounce();

    // Check for collisions between bubble and player
    if (
      bubble.y + bubble.diameter / 2 >= height - 70 &&
      bubble.x - bubble.diameter / 2 <= playerDirection + 70 &&
      bubble.x + bubble.diameter / 2 >= playerDirection
    ) {
      bubbles.pop(bubble);
      //THIS IS WHERE THE CODE FOR GAME OVER GOES
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

        //Create two new bubbles
        if (bubble.diameter > 20) {
          const newDiameter = bubble.diameter / 2;
          const color = randomColor();
          bubbles.pop(bubble);
          bubbles.push(
            new Bubble(bubble.x, bubble.y, newDiameter, -5, -5, color)
          );
          bubbles.push(
            new Bubble(bubble.x, bubble.y, newDiameter, 5, 5, color)
          );
        } else {
          bubbles.pop(bubble);
        }
      }
    }
  }

  if (startTime === true) {
    timer.draw();
  }
  //Draw Player
  image(img, playerDirection, height - 70, 70, 70);

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

function end() {
  clearInterval(seconds);
}

// Read key presses
function keyPressed() {
  if (keyCode === 32) {
    if (arrows.length > 0) {
      return;
    }
    let base = createVector(playerDirection + 25, height);
    let vec = createVector(height, height);
    arrows.push(new Arrow(base, vec));
  } else if (key === "s") {
    start();
    bubbles.push(
      new Bubble(width / 2, Math.floor(height / 3), 80, 5, 5, randomColor())
    );
  }
}
