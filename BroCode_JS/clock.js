// Digital clock

function updateClock() {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    /* 12 hour version
    let hours = now.getHours();
    const meridiem = hours > 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridien}`;
    */
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);