
function counter(maxTime) {
	var i = maxTime;
	time = maxTime;
	seconds = setInterval(function(){
		i--;
		time = i;
	},1000, i)
}


class Timer {
	score = 0;
	scorePerSecond;
	end = false;
	
	constructor(maxTime, scorePerSecond){
		this.time = maxTime;
		this.scorePerSecond = scorePerSecond;
	}

	draw(){
		this.time = time;
		if (this.time === 0) {
			end()
		}
		// this.currentTime = this.currentTime - (this.startTime / deltaTime);
		push();
		fill(0, 0, 0);
		stroke(51);
		textSize(20);
		text(`Time Left: ${this.time}`, 5, 20);
		text(`Score: ${this.score}`, 5, 40);
		text(`High Score: ${this.highScore}`, 5, 60);
		pop();
	}

	start(){
		counter(120);
	}

	end(){
		if (this.time != 0) {
			const score = this.time * this.scorePerSecond;
			return score;
		}

		this.time = 0;
		return 0;
		
	}
	
}