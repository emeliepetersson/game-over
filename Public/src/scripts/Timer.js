function counter(maxTime) {
  var i = maxTime;
  time = maxTime;
  seconds = setInterval(
    function () {
      i--;
      time = i;
    },
    1000,
    i
  );
}

class Timer {
  score = 0;
  scorePerBubble = 1.23857;
  end = false;

  constructor(maxTime) {
    this.time = maxTime;
    this.maxTime = maxTime;
  }

  draw() {
    this.time = time;
    if (this.time === 0) {
      gameOver();
    }
    push();
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`Time Left: ${this.time}`, 5, 20);
    text(`Score: ${this.score}`, 5, 40);
    text(`High Score: ${this.highScore}`, 5, 60);
    pop();
  }

  start() {
    clearInterval(seconds);
    counter(this.maxTime);
  }

  countScore() {
    this.score += this.time * this.scorePerBubble;
  }

  stop() {
    clearInterval(seconds);
    gameStart = false;
    return this.score;
  }

  gameOver() {
    clearInterval(seconds);
    gameStart = false;
  }
}
