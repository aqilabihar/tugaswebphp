// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call the function once to display the current date and time immediately
updateDateTime();
