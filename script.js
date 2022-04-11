// Declaare variables
let ms = 0,
	s = 0,
	m = 0;
let mili = document.querySelector("#milisec");
let sec = document.querySelector("#seconds");
let min = document.querySelector("#minutes");
let interval; // Declare interval
let startBtn = document.querySelector("#start-btn");
let pauseBtn = document.querySelector("#pause-btn");
let resetBtn = document.querySelector("#reset-btn");

// Declare buttons

startBtn.addEventListener("click", () => {
	clearInterval(interval);
	interval = setInterval(startTime, 10);
});
pauseBtn.addEventListener("click", () => {
	clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
	clearInterval(interval);
	ms = "00";
	s = "00";
	m = "00";
	mili.innerHTML = ms;
	sec.innerHTML = s;
	min.innerHTML = m;
});

// Set function startTime

function startTime() {
	ms++;
	if (ms < 9) {
		mili.innerHTML = "0" + ms;
	}
	if (ms > 9) {
		mili.innerHTML = ms;
	}
	if (ms > 99) {
		s++;
		sec.innerHTML = "0" + s;
		ms = 0;
		mili.innerHTML = "0" + ms;
	}
	if (s > 9) {
		sec.innerHTML = s;
	}
	if (s > 59) {
		m++;
		min.innerHTML = "0" + m;
		s = 0;
		sec.innerHTML = "0" + s;
	}
}
