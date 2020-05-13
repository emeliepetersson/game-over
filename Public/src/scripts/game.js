function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  bubbles.push(new Bubble(windowWidth / 2, Math.floor(windowHeight / 3), 50, 5, 5));
  
}

function start(){
  timer = new Timer(120, 10);
  timer.start()
  startTime = true;
}

function draw() {
  background(255);
  
  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    // bubble.updateBubble();
    bubble.bubbleBounce();

    // Check for collisions
    if (
      bubble.y + bubble.diameter / 2 >= window.innerHeight - 50 &&
      bubble.x + bubble.diameter / 2 < playerDirection + 50 &&
      bubble.x - bubble.diameter / 2 >= playerDirection
    ) {
      bubbles.pop(bubble);
    }
  }

  //Draw arrow
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i];
    arrow.shootArrow();
    end();
    if (arrow.vec.y < -windowHeight) {
      arrows.pop(arrow);
    }
  }

  //Draw Player
  
  image(img, playerDirection, window.innerHeight - 50, 50, 50);
  if (startTime === true) {
    timer.draw();
  }
  
  
}


function end(timer){
  clearInterval(seconds);
}

// Read key press to change players direction and shoot arrows
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
    end(timer);
  }else if(key === "s"){
    start()
  }
});
