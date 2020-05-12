function updateTime(currentTime){
	let time = currentTime;
	time =- 1;
	console.log(currentTime);
}


class Timer {
	scorePerSecond;
	currentTime;
	startTime = new Date().getSeconds();
	end = false;
	
	constructor(maxTime, scorePerSecond){
		this.time = maxTime;
		this.scorePerSecond = scorePerSecond;
		this.currentTime = this.maxTime - this.startTime;
		this.lastPrint = millis() - 1000;
	}

	draw(){
		// this.currentTime = this.currentTime - (this.startTime / deltaTime);
		removeElements();
		push();
		stroke(51);
		text(`${this.time}`, 10, 10);
		pop();
	}

	start(){
		var timeElapsed = millis() - this.lastPrint;
		if (timeElapsed > 1000 && this.time != 0) {
		  this.time--;
		  this.lastPrint = millis();
		}
	}

	
}