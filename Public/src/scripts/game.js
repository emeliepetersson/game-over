function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  menu = new Menu();
  c1 = color(219, 248, 255);
  c2 = color(202, 252, 175);
}

function start() {
  timer = new Timer(120, 10);
  timer.start();
  gameStart = true;
}

function draw() {
  // Background
  setGradient(0, 0, width, height, c1, c2);
  if (!gameStart) {
    menu.draw();
  } else {
    timer.draw();
  }

  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    bubble.bubbleBounce();

    // Check for collisions between bubble and player
    if (
      (bubble.y + bubble.diameter / 2 >= height - 70 &&
        bubble.x - bubble.diameter / 2 <= playerDirection + 70 &&
        bubble.x + bubble.diameter / 2 >= playerDirection) ||
      time == 0
    ) {
      timer.gameOver();
      gameOver = true;
    }
  }

  if (gameOver) {
    for (let index = 0; index < bubbles.length; index++) {
      bubbles.pop(bubbles[index]);
    }
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`Game Over`, windowWidth / 2, windowHeight / 2);
    pop();

    playerDirection = 0;
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
        arrow.vec.y <= bubble.y + bubble.diameter / 2
      ) {
        arrows.pop(arrow);

        //Create two new bubbles
        if (bubble.diameter > 20) {
          const newDiameter = bubble.diameter / 2;
          const color = randomColor();

          bubbles.push(
            new Bubble(bubble.x, bubble.y, newDiameter, 5, -50, color),
            new Bubble(bubble.x, bubble.y, newDiameter, -5, -50, color)
          );
        }

        bubbles.splice(i, 1);

        //Add score
        timer.countScore();
      }
    }
  }

  //Draw Player
  image(img, playerDirection, height - 70, 70, 70);

  // Read key presses to change player's direction
  if (gameStart && keyIsDown(LEFT_ARROW)) {
    if (playerDirection - 10 < 0) {
      return;
    }
    playerDirection -= 10;
  }
  if (gameStart && keyIsDown(RIGHT_ARROW)) {
    if (playerDirection + 60 > windowWidth) {
      return;
    }
    playerDirection += 10;
  }
}

// Read key presses
function keyPressed() {
  if (gameStart && keyCode === 32) {
    if (arrows.length > 0) {
      return;
    }
    let base = createVector(playerDirection + 35, height);
    let vec = createVector(height - 10, height - 10);
    arrows.push(new Arrow(base, vec));
  }
  //up
  else if (keyCode === 38) {
    if (menuPos > 1 && !gameStart) {
      menuPos--;
    }
  }
  // down
  else if (keyCode === 40 && !gameStart) {
    if (menuPos < 3) {
      menuPos++;
    }
  }
  //enter
  else if (keyCode === 13 && !gameStart) {
    if (menuPos === 1) {
      gameOver = false;
      start();
      bubbles.push(
        new Bubble(width / 2, Math.floor(height / 3), 100, 5, 5, randomColor())
      );
    }
  }
}
