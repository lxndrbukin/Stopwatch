const secondsContainer = document.querySelector(".seconds");
const milliContainer = document.querySelector(".milli");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let seconds = "00";
let milli = "00";
secondsContainer.innerHTML = seconds;
milliContainer.innerHTML = milli;
let interval;

const start = () => {
    milli++;
    milliContainer.innerHTML = milli;
    if (milli <= 9) {
        milli = "0" + milli;
        milliContainer.innerHTML = milli;
    }
    if (milli > 99) {
        seconds++;
        secondsContainer.innerHTML = "0" + seconds;
        milli = 0;
        milliContainer.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        secondsContainer.innerHTML = seconds;
    }
}


startBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(start, 10);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    seconds = "00";
    milli = "00";
    secondsContainer.innerHTML = seconds;
    milliContainer.innerHTML = seconds;
});

