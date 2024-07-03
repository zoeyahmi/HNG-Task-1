function displayTimeAndDay(){
    const time = document.getElementById("currentTimeUTC");
    const day = document.getElementById("currentDay");

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.innerHTML = days[new Date().getUTCDay()]
    
const hours = String(new Date().getUTCHours()).padStart(2, '0');
const minutes = String(new Date().getUTCMinutes()).padStart(2, '0');
const suffix = hours >= 12? 'pm': 'am';
const currentTime = `${(hours %12) ||12}:${minutes}${suffix} UTC`;
time.innerHTML = currentTime;
}

document.addEventListener('DOMContentLoaded', () =>{
    displayTimeAndDay();
    setInterval(displayTimeAndDay, 60000)
 })
