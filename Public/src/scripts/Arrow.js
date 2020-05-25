class Arrow {
  constructor(base, vec) {
    this.base = base;
    this.vec = vec;
  }
  shootArrow() {
    push();
    stroke(120);
    strokeWeight(2);
    fill(120);

    line(this.base.x, this.vec.x, this.base.x, this.vec.y);
    triangle(
      this.base.x - 5,
      this.vec.y,
      this.base.x,
      this.vec.y - 10,
      this.base.x + 5,
      this.vec.y
    );
    this.vec.y -= 10;
    pop();
  }
}
