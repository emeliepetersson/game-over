function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  bubbles.push(new Bubble(windowWidth / 2, windowHeight / 3, 50, 5, 5));
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
      bubble.y + bubble.diameter / 2 >= window.innerHeight - 60 &&
      bubble.x + bubble.diameter / 2 < playerDirection + 50 &&
      bubble.x + bubble.diameter / 2 > playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  //Draw arrow
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i];

    arrow.shootArrow();

    if (arrow.vec.y < -windowHeight) {
      arrows.pop(arrow);
    }

    //Check for collision between arrow and bubbles
    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      if (
        arrow.base.x <= Math.floor(bubble.x + bubble.diameter / 2) &&
        arrow.base.x >= Math.floor(bubble.x - bubble.diameter / 2) &&
        Math.abs(arrow.vec.y) >=
          Math.floor(bubble.y + bubble.diameter / 2 + 120)
      ) {
        //arrows.pop(arrow);
        bubbles.pop(bubble);
        console.log("works");
        console.log("arrow x: " + Math.abs(arrow.vec.y));
        console.log("bubble y: " + Math.floor(bubble.y + bubble.diameter / 2));
      }
    }
  }

  //Draw Player
  image(img, playerDirection, window.innerHeight - 50, 50, 50);
}

// Read key presses to change players direction and shoot arrows
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "ArrowRight") {
    playerDirection += 10;
  } else if (key === "ArrowLeft") {
    playerDirection -= 10;
  } else if (key === " ") {
    let base = createVector(playerDirection + 25, windowHeight);
    let vec = createVector(0, 0);
    arrows.push(new Arrow(base, vec));
  }
});
