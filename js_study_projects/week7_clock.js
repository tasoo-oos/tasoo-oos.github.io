const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const interval = 30;

function displayClock() {
    const now = new Date();
    const year = String(now.getFullYear()).padStart(4, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    date.innerText = `${year}/${month}/${day}`;

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const millisecond = String(now.getMilliseconds()).padStart(3, '0');
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
