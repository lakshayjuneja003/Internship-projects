let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    isRunning = true;
}

function stopTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = false;
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    }
});

stopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);
