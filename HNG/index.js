function updateDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('.day-of-week').textContent = dayOfWeek;
}

function updateUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toUTCString().split(' ')[4];
    document.querySelector('.utc-time').textContent = utcTime;
}

updateDayOfWeek();
updateUTCTime();

setInterval(updateUTCTime, 60000);
