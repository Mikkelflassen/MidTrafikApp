// Function to update ticket number based on phone movement
function updateTicketNumber() {
  // Simulating phone movement, generating a random number
  let randomNumber = Math.floor(Math.random() * 1000);
  document.getElementById('ticketNumber').innerText = randomNumber;
}

// Function to update timer and its style based on time left
function updateTimer() {
  let timeLeft = 7200; // 2 hours in seconds

  setInterval(() => {
    if (timeLeft > 0) {
      let hours = Math.floor(timeLeft / 3600);
      let minutes = Math.floor((timeLeft % 3600) / 60);
      let seconds = timeLeft % 60;

      // Display time left
      document.getElementById('timeLeft').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      // Update style based on time left
      let timerElement = document.getElementById('timer');
      if (timeLeft <= 3600) { // Less than or equal to 1 hour left
        timerElement.style.color = 'red';
      } else {
        timerElement.style.color = 'black';
      }

      timeLeft--;
    }
  }, 1000);
}

// Call functions
updateTicketNumber();
updateTimer();
