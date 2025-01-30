function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('.')[0] + " UTC"; // Format as "YYYY-MM-DDTHH:mm:ss UTC"
    document.getElementById("utc").textContent = utcTime;
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Initialize immediately
updateUTCTime();
