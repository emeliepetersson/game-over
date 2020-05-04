function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  bubbles.push(new Bubble(windowWidth / 2, windowHeight / 3, 50, 5, 5));
}

function draw() {
  background(255);

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
