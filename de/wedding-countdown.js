// Wedding countdown timer for Janna and Ben
console.log('Wedding countdown script loaded');

// Get wedding date from the page's meta data or use default
let weddingDateString = document.querySelector('meta[name="wedding-date"]')?.content || "July 8, 2026 14:00:00";
let weddingDate = new Date(weddingDateString);
console.log('Wedding date:', weddingDate);

function initCountdown() {
    let $days = document.getElementById('countdown-days');
    let $hours = document.getElementById('countdown-hours');
    let $minutes = document.getElementById('countdown-minutes');

    console.log('Found elements:', { $days, $hours, $minutes });

    // Check if countdown elements exist
    if (!$days || !$hours || !$minutes) {
        console.error('Countdown elements not found!');
        return;
    }

    console.log('All countdown elements found, starting timer...');

    function updateCountdown() {
        let now = new Date();
        let timeLeft = (weddingDate - now) / 1000;

        // If wedding date has passed, hide countdown
        if (timeLeft <= 0) {
            console.log('Wedding date has passed, hiding countdown');
            document.getElementById('wedding-countdown').style.display = 'none';
            return;
        }

        // Calculate remaining time
        let days = Math.floor(timeLeft / 86400);
        timeLeft -= days * 86400;

        let hours = Math.floor(timeLeft / 3600) % 24;
        timeLeft -= hours * 3600;

        let minutes = Math.floor(timeLeft / 60) % 60;

        // Update display with padded numbers
        $days.textContent = padNumber(days);
        $hours.textContent = padNumber(hours);
        $minutes.textContent = padNumber(minutes);
    }

    function padNumber(number) {
        return number < 10 ? "0" + number : number;
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
} else {
    initCountdown();
}