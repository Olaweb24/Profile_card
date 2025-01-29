function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('.')[0] + " UTC"; // Format as "YYYY-MM-DDTHH:mm:ss UTC"
    document.getElementById("utc").textContent = utcTime;
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Initialize immediately
updateUTCTime();


function dropdown() {
    var aboutSection = document.getElementById("bio-Content");
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block"; // Show the content
    } else {
        aboutSection.style.display = "none"; // Hide the content
    }
}