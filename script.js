// Your script here.

function startTimer() {
    const durationInput = document.getElementById('userInput');
    const duration = durationInput.value;

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid positive number for the duration.');
        return;
    }

    // Convert minutes to milliseconds
    const endTime = Date.now() + duration * 60 * 1000;

    const countDownElement = document.getElementById('countDown');
    const endTimeElement = document.getElementById('endTime');

    // Update the timer every second
    const timerId = setInterval(updateTimer, 1000);

    function updateTimer() {
        const currentTime = Date.now();
        const remainingTime = Math.max(0, endTime - currentTime);

        // Convert remaining time to minutes and seconds
        const minutes = Math.floor(remainingTime / (60 * 1000));
        const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

        // Display the remaining time
        countDownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (remainingTime === 0) {
            // Timer has ended
            clearInterval(timerId);
            endTimeElement.textContent = 'Timer ended';
        }
    }
}

