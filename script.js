function displayTimeAndDay() {
    const currentTime = document.getElementById("currentTimeUTC");
    const currentDay = document.getElementById("currentDay");
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDay.innerHTML = days[date.getUTCDay()]

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} UTC`;
    currentTime.innerHTML = time;
}

document.addEventListener('DOMContentLoaded', () => {
    displayTimeAndDay();
    setInterval(displayTimeAndDay, 1000)
})


