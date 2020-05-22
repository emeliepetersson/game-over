function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  menu = new Menu();

  c1 = color(219, 248, 255);
  c2 = color(202, 252, 175);

  //Load the sound files
  soundFormats("mp3");
  ballonPoppingSound = loadSound("./Assets/Balloon-Popping.mp3");
  shootArrowSound = loadSound("./Assets/Shoot-Arrow.mp3");
  winningSound = loadSound("./Assets/Win.mp3");
  gameOverSound = loadSound("./Assets/Game-Over.mp3");
  clickSound = loadSound("./Assets/Click.mp3");
}

function start() {
  timer = new Timer(120);
  timer.start();
  gameStart = true;
  playSound = true;

  if (level === 1) {
    bubbles.push(
      new Bubble(width / 2, Math.floor(height / 3), 60, 5, 5, randomColor())
    );
  } else if (level === 2) {
    bubbles.push(
      new Bubble(width / 2, Math.floor(height / 3), 140, 5, 5, randomColor())
    );
    c1 = color(253, 255, 206);
    c2 = color(252, 192, 175);
  }

  particles.push(new Firework(width / 2, height / 2));
  particles.push(new Firework(width / 2 + 60, height / 2 + 70));
  particles.push(new Firework(width / 2 - 70, height / 2 - 50));
}

function draw() {
  setGradient(0, 0, width, height, c1, c2);

  if (!gameStart && !showLevels) {
    menu.drawMain();
  } else if (showLevels) {
    menu.drawLevels();
  }
  if (gameStart) {
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
      gameOver = true;
    }
  }

  // GAME OVER
  if (gameOver && gameStart) {
    for (let index = 0; index < bubbles.length; index++) {
      bubbles.pop(bubbles[index]);
    }

    if (playSound) {
      gameOverSound.play();
      playSound = false;
    }

    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`Game Over`, windowWidth / 2, windowHeight / 2);
    pop();

    //Reset variables after 3 sec
    setTimeout(function () {
      if (bubbles.length <= 0) {
        timer.gameOver();
        playerDirection = 0;
        level = 1;
        c1 = color(219, 248, 255);
        c2 = color(202, 252, 175);
      }
    }, 3000);
  }

  // WINNING GAME
  if (bubbles.length <= 0 && gameStart && !gameOver) {
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`YOU WIN!`, windowWidth / 2, windowHeight / 2);
    pop();
    particles.forEach((p) => {
      p.step();
      p.draw();
    });
    particles = particles.filter((p) => p.isAlive);

    if (playSound) {
      winningSound.play();
      playSound = false;
    }

    if (particles.length <= 0 && level < 2) {
      score += timer.score;
      level += 1;
      timer.stop();
      start();
      playerDirection = 0;
    } else if (particles.length <= 0 && level == 2) {
      score += timer.score;
      level += 1;
    } else if (level > 2) {
      push();
      textAlign(CENTER);
      fill(0, 0, 0);
      stroke(51);
      textSize(20);
      text(`Your score: ${score}`, windowWidth / 2, windowHeight / 2 + 30);
      pop();
      //Reset variables after 5 sec
      setTimeout(function () {
        if (particles.length <= 0) {
          timer.stop();
          playerDirection = 0;
          level = 1;
          c1 = color(219, 248, 255);
          c2 = color(202, 252, 175);
        }
      }, 5000);
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
        arrow.vec.y <= bubble.y + bubble.diameter / 2
      ) {
        arrows.pop(arrow);
        ballonPoppingSound.play();

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
  //Shoot arrows
  console.log(keyCode);

  if (gameStart && keyCode === 32) {
    if (arrows.length > 0) {
      return;
    }
    let base = createVector(playerDirection + 35, height);
    let vec = createVector(height - 10, height - 10);
    arrows.push(new Arrow(base, vec));
    shootArrowSound.play();
  }
  //up
  else if (keyCode === 38 && !gameStart) {
    clickSound.play();
    if (menuPos > 1 && !showLevels) {
      menuPos--;
    } else if (levelsMenuPos > 1) {
      levelsMenuPos--;
    }
  }
  // down
  else if (keyCode === 40 && !gameStart) {
    clickSound.play();
    if (menuPos < 3 && !showLevels) {
      menuPos++;
    } else if (levelsMenuPos < 2) {
      levelsMenuPos++;
    }
  }
  //enter
  else if (keyCode === 13 && !gameStart && !showLevels) {
    clickSound.play();
    if (menuPos === 1) {
      gameOver = false;
      start();
    }
    if (menuPos === 2) {
      showLevels = true;
    }
  } else if (keyCode === 13 && showLevels) {
    clickSound.play();
    if (levelsMenuPos === 1) {
      level = 1;
      gameOver = false;
      showLevels = false;
      start();
    }
    if (levelsMenuPos === 2) {
      level = 2;
      gameOver = false;
      showLevels = false;
      start();
    }
  } else if (keyCode === 27 && !gameStart && showLevels) {
    showLevels = false;
  }
}
