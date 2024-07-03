function displayTimeAndDay() {
    const currentTime = document.getElementById("currentTimeUTC");
    const currentDay = document.getElementById("currentDay");
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDay.innerHTML = days[date.getUTCDay()]

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const time = `${hours}:${minutes}:${seconds} UTC`;
    currentTime.innerHTML = time;
}

document.addEventListener('DOMContentLoaded', () => {
    displayTimeAndDay();
    setInterval(displayTimeAndDay, 1000)
})

