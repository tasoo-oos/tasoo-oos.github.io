const clock = document.querySelector('#clock');

const interval = 30;

function displayClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    const millisecond = String(date.getMilliseconds()).padStart(3, '0');
    clock.innerText = `${hour}:${minute}:${second}.${millisecond}`;
}

function preciseInterval() {
    displayClock();

    const now = Date.now();
    const shift = interval - (now % interval);
    setTimeout(preciseInterval, Math.max(0, shift));
    // console.log(now, shift);
}

// Start the clock
preciseInterval();
