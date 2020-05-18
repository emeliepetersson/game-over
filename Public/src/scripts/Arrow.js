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
        // translate(this.base.x, this.base.y);
        // line(0, 0, this.vec.x, this.vec.y);
        // rotate(this.vec.heading());
        //let arrowSize = 7;
        // translate(this.vec.mag() - arrowSize, 0);
        // triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        // this.vec.y -= 10;

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
