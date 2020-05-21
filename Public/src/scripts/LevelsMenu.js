class LevelsMenu {
  menuX = width / 2;
  menuY = height / 3 + 50;

  draw() {
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(24);
    if (levelsMenuPos === 1) {
      triangle(
        this.menuX - 100,
        this.menuY,
        this.menuX - 100,
        this.menuY - 20,
        this.menuX - 62,
        this.menuY - 10
      );
    }
    text(`Level 1`, this.menuX, this.menuY);
    if (levelsMenuPos === 2) {
      triangle(
        this.menuX - 114,
        this.menuY + 25,
        this.menuX - 114,
        this.menuY + 5,
        this.menuX - 76,
        this.menuY + 15
      );
    }
    text(`Level 2`, this.menuX, this.menuY + 24);

    pop();
  }
}
