class Arrow {
  constructor(positionX, direction, startPositionY) {
    this.positionX = positionX;
    this.direction = direction;
    this.startPositionY = startPositionY;
  }

  drawArrow() {
    stroke(126);
    line(this.positionX, this.direction, this.positionX, this.startPositionY);
  }

  shootArrow() {
    this.direction = this.direction - 10;
  }
}
