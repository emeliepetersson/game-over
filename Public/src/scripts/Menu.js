class Menu{
	menuX = width/2;
	menuY = height/3 + 50;

	draw(){
		push()
		textAlign(CENTER);
		fill(0, 0, 0);
		stroke(51);
		textSize(24);
		if (menuPos === 1) {
			triangle(this.menuX - 100, this.menuY, this.menuX - 100, this.menuY - 20, this.menuX - 62, this.menuY - 10);
		}
		text(`Start Game`, this.menuX, this.menuY);
		if (menuPos === 2) {
			triangle(this.menuX - 114, this.menuY + 25, this.menuX - 114, this.menuY + 5, this.menuX - 76, this.menuY + 15);
		}
		text(`Choose Level`, this.menuX, this.menuY + 24);
		if (menuPos === 3) {
			triangle(this.menuX - 85, this.menuY + 30, this.menuX - 85, this.menuY + 50, this.menuX - 46, this.menuY + 40);
		}
		text(`Settings`, this.menuX, this.menuY + 48);

		pop()	
	}
}